import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom' // Updated imports
import store, { history } from './store/store'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import HotelsPage from './pages/HotelsPage'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
const App = () => (
	<Provider store={store}>
		<HistoryRouter history={history}>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/hotels' element={<HotelsPage />} />
			</Routes>
		</HistoryRouter>
	</Provider>
)

export default App
