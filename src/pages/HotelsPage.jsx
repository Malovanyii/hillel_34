import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, Typography, Grid, Box } from '@mui/material'

const HotelsPage = () => {
	const hotels = useSelector(state => state.destinations.hotels)

	return (
		<div style={{ padding: '20px' }}>
			<Typography variant='h4' color='primary'>
				Готелі
			</Typography>
			<Grid container spacing={2} style={{ marginTop: '20px' }}>
				{hotels.map(hotel => (
					<Grid item xs={12} sm={4} key={hotel.id}>
						<Card
							variant='outlined'
							style={{ borderRadius: '8px' }}
						>
							<CardContent>
								<Box
									sx={{
										height: '140px',
										width: '180px',
										backgroundColor: '#d3d3d3',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: '10px',
									}}
								>
									<Typography
										variant='body2'
										color='text.secondary'
									>
										140 x 140
									</Typography>
								</Box>
								<Typography variant='h6' component='div'>
									{hotel.name}
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
								>
									address: {hotel.address}
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
								>
									city: {hotel.city}, state:{' '}
									{hotel.state || ''}, country code:{' '}
									{hotel.country_code}
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
								>
									rating: {hotel.hotel_rating}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default HotelsPage
