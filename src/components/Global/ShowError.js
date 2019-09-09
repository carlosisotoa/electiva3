//Dependencies
import React, { Component } from "react";
import PropTypes from 'prop-types';

//Assets
import './css/Error.css';

class ShowError extends Component {
	static propTypes = {
		message: PropTypes.string.isRequired
		
	};
	render(){
		const { message } = this.props;
		return (
			<div className="ShowError"> 
				<div className= "ShowError">
      			 	<p>{message}</p> 
      			 	
      			</div>
      			
      		</div>
		);
	}
}
export default ShowError;