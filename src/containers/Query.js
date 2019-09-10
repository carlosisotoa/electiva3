//Dependencies
import React, {Component } from 'react';
//Components
import Queries from '../components/Queries';

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

class QueryContainer extends Component {
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

		this.onChange =	 this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
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
		const {
					name,
					email,
					phone,
					description,
					message,
					errors
				} = this.state
		return (
			<Queries
				name = {name}
				email = {email}
				phone = {phone}
				description ={description}
				errors= {errors}
				message = {this.message}
				onChange = {this.onChange}
				handleSubmit ={this.handleSubmit}
				handleReset = {this.handleReset}
			 />
		);
	}
}
export default QueryContainer;
