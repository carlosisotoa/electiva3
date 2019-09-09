//Dependencies
import React, { Component } from "react";
import PropTypes from 'prop-types';

//Assets
import './css/Info.css';

class Info extends Component {
	static propTypes = {
		message: PropTypes.string.isRequired
		
	};
	render(){
		const { message } = this.props;
		return (
			<div className="Info"> 
				<div className= "Info">
      			 	<p>{message}</p> 
      			 	
      			</div>
      			
      		</div>
		);
	}
}
export default Info;