import FavoriteIcon from '@mui/icons-material/Favorite'
import InfoIcon from '@mui/icons-material/Info'
import PortraitIcon from '@mui/icons-material/Portrait'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'
import NavItem from '../components/NavItem'
import { useUser } from '../../users/providers/UserProvider'



const Footer = () => {
	const navigate = useNavigate()
	const {user} = useUser()
	return (
		<Paper
			sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation showLabels>
				<BottomNavigationAction
					onClick={() => navigate(ROUTES.ABOUT)}
					label='About'
					icon={<InfoIcon />}
				/>
			{user &&	<BottomNavigationAction
					onClick={() => navigate(ROUTES.FAV_CARDS)}
					label='Favorites'
					icon={<FavoriteIcon />}
				/>}

			{user && user.isBusiness && <BottomNavigationAction
					onClick={() => navigate(ROUTES.MY_CARDS)}
					label='My Cards'
					icon={<PortraitIcon />}
				/>}
			</BottomNavigation>
		</Paper>
	)
}

export default Footer
