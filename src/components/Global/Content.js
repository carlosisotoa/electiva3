//Dependencies
import React, { Component }  from "react";
import ReactDOM, { render} from "react-dom";
import PropTypes from 'prop-types';
//Assets
import './css/Content.css';
class Content extends Component{
	static propTypes = {
		body: PropTypes.object.isRequired
	};
	render(){
		const { body } = this.props;
		return(
			<div className="Content">
				<div className="Content">
					
				</div>
				<div className="Content-text">
						<h1>{ body }</h1>
				</div>
			</div>
		);
	}
}
export default Content;
