//Dependencies
import React, {Component } from 'react';
//Assets
import './index.css';
class Queries extends Component {
	constructor(args) {
		super(args)
		this.state = {
			name:'',
			email:'', 
			phone:'',
			description:'',
			
		}
	} 

	
	onChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
	} 
	
	handleSubmit = e => {
		
		console.log('prevenido!', this.state);
	}
	render() {
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
						

					<input className="input" 
						name="email"
						id="email"
						type="text" 
						value={this.state.email}
						onChange={this.onChange.bind(this)}
						type="email" 
						placeholder="Email" 
						required />
					<input className="input" 
						type="tel" 
						name="phone"
						id="phone"
						value={this.state.phone}
						onChange={this.onChange.bind(this)}
						placeholder="Teléfono" 
						required /> 
					<textarea className="textarea" 
						type="text"
						name="description"
						id="description"
						value={this.state.description}
						onChange={this.onChange.bind(this)}
						placeholder="Describa su caso" 
						required />
					<div className = "Queries-btn-form">
						<input className="btn-submit" 
							type="submit" 
							value="Registrar" 
							onClick={this.handleSubmit(this)}/>
						<input className="btn-reset" 
							type="reset" 
							value="Limpiar" />
					</div>	

				</div>
				<p>{JSON.stringify(this.state)}</p>
			</div>
		);
	}
}

export default Queries;
