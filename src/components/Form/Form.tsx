import { useForm } from 'react-hook-form';
import './Form.css';

export const Form = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	});

	return (
		<>
			<div>
				<h1>Додати</h1>
				<form
					onSubmit={handleSubmit((data: any) => {
						onSubmit(data);
						console.log(data);

						reset();
					})}
					action=""
				>
					<div className="select-currenty">
						<label>
							Виберіть валюту
							<select
								className="select-currency"
								{...register('currency', { required: false })}
							>
								<option selected value="UAH">
									UAH
								</option>
								<option value="USD">USD</option>
								<option value="EUR">EUR</option>
							</select>
						</label>
					</div>
					<label>
						Назва:
						<input
							type="text"
							{...register('name', {
								required: true,
							})}
						/>
					</label>
					<div style={{ height: 40 }}>
						{errors?.name && <p style={{ color: 'red' }}>Заповніть поле!</p>}
					</div>
					<label>
						Дебіт:
						<input
							type="number"
							{...register('debit', { required: true, valueAsNumber: true })}
						/>
					</label>
					<div style={{ height: 40 }}>
						{errors?.debit && <p style={{ color: 'red' }}>Заповніть поле!</p>}
					</div>
					<label>
						Кредіт:
						<input
							type="number"
							{...register('credit', { required: true, valueAsNumber: true })}
						/>
					</label>
					<div style={{ height: 40 }}>
						{errors?.credit && <p style={{ color: 'red' }}>Заповніть поле!</p>}
					</div>
					<label>
						Компанія:
						<input type="text" {...register('company', { required: true })} />
					</label>
					<div style={{ height: 40 }}>
						{errors?.company && <p style={{ color: 'red' }}>Заповніть поле!</p>}
					</div>
					<label>
						Опис:
						<input
							type="text"
							{...register('description', { required: true })}
						/>
					</label>
					<div style={{ height: 40 }}>
						{errors?.description && (
							<p style={{ color: 'red' }}>Заповніть поле!</p>
						)}
					</div>
					<input type="submit" value={'Додати'} />
				</form>
			</div>
		</>
	);
};

// export const MyForm = () => {
// 	const [inputs, setInputs] = useState({});

// 	const handleChange = (event) => {
// 		const name = event.target.name;
// 		const value = event.target.value;
// 		setInputs((values) => ({ ...values, [name]: value }));
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		console.log(inputs);
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<label>
// 				Enter your name:
// 				<input
// 					type="text"
// 					name="username"
// 					value={inputs.username || ''}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 			<label>
// 				Enter your age:
// 				<input
// 					type="number"
// 					name="age"
// 					value={inputs.age || ''}
// 					onChange={handleChange}
// 				/>
// 			</label>
// 			<input type="submit" />
// 		</form>
// 	);
// };
