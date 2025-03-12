import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
	fetchDestinations,
	setDestinations,
	fetchHotels,
	setHotels,
} from '../slices/destinationsSlice.jsx'
import { push } from 'redux-first-history'

function* fetchDestinationsSaga() {
	const response = yield call(
		axios.get,
		`${process.env.REACT_APP_API_URL}/destination`
	)
	yield put(setDestinations(response.data))
}

function* fetchHotelsSaga(action) {
	const response = yield call(
		axios.get,
		`${process.env.REACT_APP_API_URL}/hotels`,
		{
			params: { city: action.payload.destination },
		}
	)
	yield put(setHotels(response.data))
	yield put(push('/hotels'))
}

export default function* rootSaga() {
	yield takeLatest(fetchDestinations.type, fetchDestinationsSaga)
	yield takeLatest(fetchHotels.type, fetchHotelsSaga)
}
