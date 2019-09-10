//Dependencies
import React from 'react';

//Components
import ShowError from  '../Global/ShowError';
import Info from  '../Global/Info';
//Assets
import './index.css';

function Queries (props) {
	const {
			name,
			email,
			phone,
			description,
			errors,
			message,
			onChange,
			handleSubmit,
			handleReset,
	} = props;
return (
		<div className="Queries">
			<div className = "Queries-form-top">
				<h1>Formulario de <span>consulta</span> </h1>
			</div>
			<div className="Queries-form" >
				<input className="input"
					name="name"
					id="name"
					type="text"
					value={name}
					onChange={onChange}
					placeholder="Nombre"
						required />
				{errors.name && <ShowError message ={errors.name} /> }
					<input className="input"
						name="email"
						id="email"
						type="text"
						value={email}
						onChange={onChange}
						type="email"
						placeholder="Email"
						required />
				{errors.email && <ShowError message ={errors.email} /> }
					<input className="input"
						type="number"
						name="phone"
						id="phone"
						value={phone}
						onChange={onChange}
						placeholder="Teléfono"
						required />
				{errors.phone && <ShowError message ={errors.phone} /> }
					<textarea className="textarea"
						type="text"
						name="description"
						id="description"
						value={description}
						onChange={onChange}
						placeholder="Describa su caso"
						required />
				{errors.description && <ShowError message ={errors.description} /> }
					<div className = "Queries-btn-form">
						<input className="btn-submit"
							type="submit"
							value="Registrar"
							onClick={handleSubmit}/>
						{message && <Info message ={message} /> }
						<input className="btn-reset"
							type="reset"
							value="Limpiar"
							onClick = {handleReset}/>
					</div>

				</div>
			</div>
		)
}

export default Queries;
