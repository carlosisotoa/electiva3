//Dependencies
import React, { Component }  from "react";
import ReactDOM, { render} from "react-dom";
import PropTypes from 'prop-types';

// Assets



class Content extends Component{
	static propTypes = {
		body: PropTypes.object.isRequired
	};
	render(){
		const { body } = this.props;
		return(
			<div  >
				{ body }
				
			</div>
		);
	}
}
export default Content;
