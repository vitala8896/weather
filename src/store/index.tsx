import { configureStore } from '@reduxjs/toolkit'
// @ts-ignore
import citySlice from './citySlice.tsx'

export const store = configureStore({
	reducer: {
		city: citySlice,
	},
})
