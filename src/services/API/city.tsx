// @ts-ignore
import axios from './../axios.tsx'
// @ts-ignore
import { setReduxActiveCityName, setReduxActiveCity } from '../../store/citySlice.tsx'

export const getAllCities = (names: any[]) => {
  setLocalCitiesNames(names)
  let requests = names.map(async (name: any) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    return await res.json()
  });
  let citiesData: Array<{}> = [];  
  Promise.all(requests)
    .then(responses => {
      for(let response of responses) {
        citiesData.push(response)
      }
      setLocalCities(citiesData)
    }  
  )
}
export const getActiveCityName = (name: string) => {   
  return async (dispatch: any) => {
    try {      
        dispatch(setReduxActiveCityName(name))
      }
      catch (e) {
      console.log(e)
    }
  }
}
export const getActiveCityByName = (name: string) => {  
  return async (dispatch: (arg0: { payload: any; type: "city/setReduxActiveCity" }) => void) => {
    try {
      await axios.get(`/data/2.5/forecast?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then((response: { data: any }) => {        
        dispatch(setReduxActiveCity(response.data))
      }) 
    } catch (e) {
      console.log(e)
    }
  }
}
export const setLocalCities = (cities: object) => {
	localStorage.setItem('cities', JSON.stringify(cities))
}
export const getLocalCities = () => {
	const cities = localStorage.getItem('cities')
	return cities ? JSON.parse(cities) : {}
}
export const getLocalCitiesName = () => {
	const citiesName = localStorage.getItem('namesCities')
	return citiesName ? JSON.parse(citiesName) : ''
}
export const setLocalCitiesNames = (names: object) => {
	localStorage.setItem('namesCities', JSON.stringify(names))
}