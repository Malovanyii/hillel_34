import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Header = () => (
	<AppBar position='static' color='transparent'>
		<Toolbar>
			<Typography variant='h6' style={{ flexGrow: 1 }}>
				<Link
					to='/'
					style={{ textDecoration: 'none', color: '#ff9800' }}
				>
					Booking
				</Link>
			</Typography>
			<Button
				component={Link}
				to='/'
				color='inherit'
				style={{ color: '#ff9800' }}
			>
				Home
			</Button>
			<Button
				component={Link}
				to='/about'
				color='inherit'
				style={{ color: '#ff9800' }}
			>
				About
			</Button>
		</Toolbar>
	</AppBar>
)

export default Header
