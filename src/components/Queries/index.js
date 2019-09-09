//Dependencies
import React, {Component } from 'react';

//Components
import ShowError from  '../Global/ShowError';
import Info from  '../Global/Info';
//Assets
import './index.css';


const validate = values => {
	const errors = {};
	const emailRegex = new RegExp(/\S+@\S+\.\S+/);
	if (!values.name) {
		errors.name = 'El nombre es obligatorio'
	}
	if(!emailRegex.test(values.email)){
		errors.email = 'Correo no valido'
	}
	
	if (!values.phone) {
		errors.phone = 'El teléfono es obligatorio'
	}
	if (!values.description) {
		errors.description = 'La consulta es obligatoria'
	}
	
	return errors
}

class Queries extends Component {
	constructor(args) {
		super(args)
		this.state = {
			name:'',
			email:'', 
			phone:'',
			description:'',
			errors:{},
			message:''
			
		}
	}   

	
	onChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
	} 
	
	handleSubmit = e => {

		const {errors, ...sinErrors} = this.state;
		const result = validate(sinErrors);

		this.setState({ errors : result});
		if (!Object.keys(result).length) {
			// Enviar formulario
			this.setState({ message : 'Información enviada'});
			console.log("formulario valido");
		}
	}

	handleReset = e => {
		this.setState({ 
			name:'',
			email:'', 
			phone:'',
			description:'',
			errors:{},
			message:''

		});
	}
	
	render() {
		const {errors} = this.state
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
						value={this.state.name}
						onChange={this.onChange.bind(this)}
						placeholder="Nombre" 
						required />
					{this.state.errors.name && <ShowError message ={this.state.errors.name} /> }

					<input className="input" 
						name="email"
						id="email"
						type="text" 
						value={this.state.email}
						onChange={this.onChange.bind(this)}
						type="email" 
						placeholder="Email" 
						required />
					{this.state.errors.email && <ShowError message ={this.state.errors.email} /> }

					<input className="input" 
						type="number" 
						name="phone"
						id="phone"
						value={this.state.phone}
						onChange={this.onChange.bind(this)}
						placeholder="Teléfono" 
						required /> 
					{this.state.errors.phone && <ShowError message ={this.state.errors.phone} /> }
					<textarea className="textarea" 
						type="text"
						name="description"
						id="description"
						value={this.state.description}
						onChange={this.onChange.bind(this)}
						placeholder="Describa su caso" 
						required />
					{this.state.errors.description && <ShowError message ={this.state.errors.description} /> }

					<div className = "Queries-btn-form">
						<input className="btn-submit" 
							type="submit" 
							value="Registrar" 
							onClick={this.handleSubmit.bind(this)}/>
					{this.state.message && <Info message ={this.state.message} /> }

						<input className="btn-reset" 
							type="reset" 
							value="Limpiar" 
							onClick = {this.handleReset.bind(this)}/>
					</div>	
					<p>{JSON.stringify(this.state)}</p>
				</div>
				
				
			</div>
		);
	}
}

export default Queries;
