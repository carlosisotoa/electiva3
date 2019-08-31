//Dependencies
import React, { Component } from "react";
import PropTypes from 'prop-types';
//Assets
import './css/Header.css';

class Header extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired
	};
	render(){
		const { title, items } = this.props;
		return (
			<div className="Header"> 
				<div className= "Header-left">
      			 	<h1>{title}</h1> 
      			 	
      			</div>
      			<div>
      				<ul className="Menu">
      					{ 
      						items && items.map(
      							(item, key) => <li key={key}>{item.title}</li>
      						)
      					} 
      			  	</ul>
      			 </div>
      		</div>
		);
	}
}
export default Header;