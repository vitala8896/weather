import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    cities: {
      list: [],
      activeCity: {
        name: '', 
        data: {}
      },         
    },
  },
  reducers: {
    setReduxCitiesList: (state, event) => {
      state.cities.list = event.payload
    }, 
    setReduxActiveCityName: (state, event) => {
      state.cities.activeCity.name = event.payload
    },
    setReduxActiveCity: (state, event) => {
      state.cities.activeCity.data = event.payload
    },    
  },
})

export const { 
  setReduxCitiesList,
  setReduxActiveCityName,
  setReduxActiveCity, 
} = citySlice.actions

export default citySlice.reducer