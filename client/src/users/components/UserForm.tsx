import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Joi from 'joi'
import { ChangeEvent, FC } from 'react'
import Form from '../../forms/components/Form'
import FormLink from '../../forms/components/FormLink'
import Input from '../../forms/components/Input'
import ROUTES from '../../routes/routesModel'
import {
	RegistrationForm,
	RegistrationFormErrors,
} from '../models/types/userTypes'

type Props = {
	title?: string
	onSubmit: () => void
	onReset: () => void
	onFormChange: () => Joi.ValidationError | null
	errors: RegistrationFormErrors
	data: RegistrationForm
	onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
	setData: (data: RegistrationForm) => void
}
const UserForm: FC<Props> = ({
	onSubmit,
	onReset,
	onFormChange,
	title,
	errors,
	data,
	onInputChange,
	setData,
}) => {
	return (
		<Form
			onSubmit={onSubmit}
			onReset={onReset}
			onFormChange={onFormChange}
			styles={{ maxWidth: '800px' }}
			title={title}
			to={ROUTES.CARDS}
		>
			<Input
				name='first'
				label='first name'
				error={errors.first}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='middle'
				label='middle name'
				error={errors.middle}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
				required={false}
			/>
			<Input
				name='last'
				label='last name'
				error={errors.last}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='phone'
				label='phone'
				type='phone'
				error={errors.phone}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='email'
				label='email'
				type='email'
				error={errors.email}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='password'
				label='password'
				type='password'
				error={errors.password}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='url'
				label='image url'
				error={errors.url}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
				required={false}
			/>
			<Input
				name='alt'
				label='image alt'
				error={errors.alt}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
				required={false}
			/>
			<Input
				name='state'
				label='state'
				error={errors.state}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
				required={false}
			/>
			<Input
				label='country'
				name='country'
				error={errors.country}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='city'
				label='city'
				error={errors.city}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='street'
				label='street'
				error={errors.street}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='houseNumber'
				label='house Number'
				type='number'
				error={errors.houseNumber}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Input
				name='zip'
				label='zip'
				error={errors.zip}
				onInputChange={onInputChange}
				data={data}
				breakPoints={{ sm: 6 }}
			/>
			<Grid item>
				<FormControlLabel
					name='isBusiness'
					control={
						<Checkbox
							value={data.isBusiness}
							color='primary'
							onChange={(e) =>
								setData({ ...data, isBusiness: !!e.target.checked })
							}
						/>
					}
					label='Signup as business'
				/>
			</Grid>
			<FormLink text='Already registered?' to={ROUTES.LOGIN} />
		</Form>
	)
}

export default UserForm
