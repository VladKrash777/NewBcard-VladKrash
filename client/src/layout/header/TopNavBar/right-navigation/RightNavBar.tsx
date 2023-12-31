import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SearchBar from '../search-bar/SearchBar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MoreButton from './MoreButton'
import Logged from './Logged'
import NotLogged from './NotLogged'
import { useTheme } from '../../../../providers/ThemeProvider'
import { useUser } from '../../../../users/providers/UserProvider'


const RightNavBar = () => {
	const {isDark ,toggleDarkMode } = useTheme()
	const {user} = useUser()
	
	return (
		<>
			<Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
				<SearchBar />

				<IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
					{isDark ? <LightModeIcon/> : <DarkModeIcon />}
				</IconButton>

				{!user && <NotLogged />}

				{user && <Logged />}
			</Box>

			<MoreButton />
		</>
	)
}

export default RightNavBar
