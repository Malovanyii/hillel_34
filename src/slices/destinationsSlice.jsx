import { createSlice } from '@reduxjs/toolkit'

const destinationsSlice = createSlice({
	name: 'destinations',
	initialState: {
		destinations: [],
		hotels: [],
	},
	reducers: {
		fetchDestinations: state => state,
		setDestinations: (state, action) => {
			state.destinations = action.payload
		},
		fetchHotels: state => state,
		setHotels: (state, action) => {
			state.hotels = action.payload
		},
	},
})

export const { fetchDestinations, setDestinations, fetchHotels, setHotels } =
	destinationsSlice.actions
export default destinationsSlice.reducer
