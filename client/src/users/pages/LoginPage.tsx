import Container from '@mui/material/Container'
import { Navigate } from 'react-router-dom'
import Form from '../../forms/components/Form'
import FormLink from '../../forms/components/FormLink'
import Input from '../../forms/components/Input'
import useForm from '../../forms/hooks/useForm'
import ROUTES from '../../routes/routesModel'
import initialLoginForm from '../helpers/initialForms/initialLoginForm'
import useHandleUsers from '../hooks/useHandleUsers'
import loginSchema from '../models/joi/loginSchema'
import { useUser } from '../providers/UserProvider'

const LoginPage = () => {
	const { user } = useUser()
	const { handleLogin } = useHandleUsers()

	const { value, ...rest } = useForm(initialLoginForm, loginSchema, handleLogin)

	if (user) return <Navigate replace to={ROUTES.CARDS} />

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Form
				onSubmit={rest.onSubmit}
				onReset={rest.handleReset}
				onFormChange={rest.validateForm}
				title='login'
				styles={{ maxWidth: '450px' }}
				to={ROUTES.CARDS}
			>
				<Input
					label='email'
					name='email'
					type='email'
					error={value.errors.email}
					onInputChange={rest.handleInputChange}
					data={value.data}
				/>
				<Input
					label='password'
					name='password'
					type='password'
					error={value.errors.password}
					onInputChange={rest.handleInputChange}
					data={value.data}
				/>
				<FormLink text='Did not registered yet?' to={ROUTES.SIGNUP} />
			</Form>
		</Container>
	)
}

export default LoginPage
