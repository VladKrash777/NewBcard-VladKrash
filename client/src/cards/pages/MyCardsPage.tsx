import AddIcon from '@mui/icons-material/Add'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import ROUTES from '../../routes/routesModel'
import { useUser } from '../../users/providers/UserProvider'
import CardsFeedback from '../components/CardsFeedback'
import useCards from '../hooks/useCards'

const MyCardsPage = () => {
	const { user } = useUser()
	const { value, handleGetMyCards, handleDeleteCard } = useCards()
	const { cards, error, isLoading } = value
	const navigate = useNavigate()

	useEffect(() => {
		handleGetMyCards()
	}, [])

	const onDeleteCard = async (cardId: string) => {
		await handleDeleteCard(cardId)
		await handleGetMyCards()
	}

	if (!user || !user.isBusiness)
		return <Navigate replace to={ROUTES.MY_CARDS} />

	return (
		<Container sx={{ position: 'relative', minHeight: '92vh' }}>
			<PageHeader
				title='My Cards Page'
				subtitle='Here you can find your business cards'
			/>

			{cards && (
				<Fab
					onClick={() => navigate(ROUTES.CREATE_CARD)}
					color='primary'
					aria-label='add'
					sx={{
						position: 'absolute',
						bottom: 75,
						right: 16,
					}}
				>
					<AddIcon />
				</Fab>
			)}
			<CardsFeedback
				isLoading={isLoading}
				error={error}
				cards={cards}
				onDelete={onDeleteCard}
			/>
		</Container>
	)
}

export default MyCardsPage
