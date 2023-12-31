import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { Outlet } from 'react-router-dom'
import NavItem from '../layout/components/NavItem'
const Sandbox = () => {
	return (
		<>
			<AppBar position='sticky' color='transparent'>
				<Toolbar>
					<NavItem label='babel' to='babel' color='black' />
					<NavItem label='styles' to='comp-style' color='black' />
					<NavItem
						label='string interpolation'
						to='string-interpolation'
						color='black'
					/>
					<NavItem label='lifecycle hooks' to='lifecycle' color='black' />
					<NavItem label='custom hooks' to='custom' color='black' />
					<NavItem label='memoization' to='memoization' color='black' />
					
				</Toolbar>
			</AppBar>

			<Outlet />
		</>
	)
}

export default Sandbox
