import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    cities: {
      names: ['Lviv'],
      list: [],
      activeCity: {
        name: '', 
        data: {}
      },         
    },
    form: {
      open: 'none'
    }
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
    setReduxFormOpen: (state) => {
      state.form.open = 'flex'
    }, 
    setReduxFormClose: (state) => {
      state.form.open = 'none'
    },
    setReduxAddCityName: (state, event) => {
      state.cities.names = event.payload
    },
  },
})

export const { 
  setReduxCitiesList,
  setReduxActiveCityName,
  setReduxActiveCity, 
  setReduxFormOpen,
  setReduxFormClose,
  setReduxAddCityName
} = citySlice.actions

export default citySlice.reducer