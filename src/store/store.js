import { configureStore } from '@reduxjs/toolkit'
import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history' // Import from history package
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/sagas.js'
import destinationsReducer from '../slices/destinationsSlice.jsx'
import hotelsReducer from '../slices/destinationsSlice.jsx'

const { createReduxHistory, routerMiddleware, routerReducer } =
	createReduxHistoryContext({
		history: createBrowserHistory(),
	})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		router: routerReducer,
		destinations: destinationsReducer,
		hotels: hotelsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware),
})

sagaMiddleware.run(rootSaga)

export const history = createReduxHistory(store)
export default store
