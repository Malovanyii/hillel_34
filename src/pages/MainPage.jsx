import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Field } from 'react-final-form'
import { TextField, Select, MenuItem, Button, Typography } from '@mui/material'
import { fetchDestinations, fetchHotels } from '../slices/destinationsSlice'

const MainPage = () => {
	const dispatch = useDispatch()
	const destinations = useSelector(state => state.destinations.destinations)

	useEffect(() => {
		dispatch(fetchDestinations())
	}, [dispatch])

	const onSubmit = values => {
		dispatch(fetchHotels(values))
	}

	const validate = values => {
		const errors = {}
		if (!values.destination) errors.destination = 'Required'
		if (!values.checkIn) errors.checkIn = 'Required'
		if (!values.checkOut) errors.checkOut = 'Required'
		if (!values.adults) errors.adults = 'Required'
		if (
			values.checkIn &&
			values.checkOut &&
			new Date(values.checkOut) <= new Date(values.checkIn)
		) {
			errors.checkOut =
				'The departure date must be later in the arrival date'
		}
		return errors
	}

	return (
		<div style={{ padding: '20px' }}>
			<Typography variant='h4' color='primary'>
				Trawel With Booking
			</Typography>
			<Form
				onSubmit={onSubmit}
				validate={validate}
				render={({ handleSubmit }) => (
					<form
						onSubmit={handleSubmit}
						style={{
							display: 'flex',
							gap: '10px',
							marginTop: '20px',
						}}
					>
						<Field name='destination'>
							{({ input, meta }) => (
								<div>
									<Select {...input} displayEmpty fullWidth>
										<MenuItem value='' disabled>
											Destination
										</MenuItem>
										{destinations.map(dest => (
											<MenuItem
												key={dest.id}
												value={dest.label}
											>
												{dest.label}
											</MenuItem>
										))}
									</Select>
									{meta.error && meta.touched && (
										<span style={{ color: 'red' }}>
											{meta.error}
										</span>
									)}
								</div>
							)}
						</Field>
						<Field name='checkIn'>
							{({ input, meta }) => (
								<TextField
									{...input}
									type='date'
									label='Arrival'
									slotProps={{ inputLabel: { shrink: true } }}
									error={meta.touched && !!meta.error}
									helperText={meta.touched && meta.error}
								/>
							)}
						</Field>
						<Field name='checkOut'>
							{({ input, meta }) => (
								<TextField
									{...input}
									type='date'
									label='Departure'
									slotProps={{ inputLabel: { shrink: true } }}
									error={meta.touched && !!meta.error}
									helperText={meta.touched && meta.error}
								/>
							)}
						</Field>
						<Field name='adults'>
							{({ input, meta }) => (
								<TextField
									{...input}
									type='number'
									label='Adults'
									slotProps={{ inputLabel: { min: 1 } }}
									error={meta.touched && !!meta.error}
									helperText={meta.touched && meta.error}
								/>
							)}
						</Field>
						<Field name='children'>
							{({ input, meta }) => (
								<TextField
									{...input}
									type='number'
									label='Children'
									slotProps={{ inputLabel: { min: 1 } }}
									error={meta.touched && !!meta.error}
									helperText={meta.touched && meta.error}
								/>
							)}
						</Field>
						<Button
							type='submit'
							variant='contained'
							color='primary'
						>
							Send
						</Button>
					</form>
				)}
			/>
		</div>
	)
}

export default MainPage
