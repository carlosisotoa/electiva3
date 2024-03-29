//Dependencies
import React, { Component }  from "react";
import ReactDOM, { render} from "react-dom";
import PropTypes from 'prop-types';
//Components
import Header from "./Global/Header";
import Content from "./Global/Content";
import Footer from "./Global/Footer";

//Data
import items from '../data/menu';
//Assets
import './App.css';
class App extends Component{
	static propTypes = {
		children: PropTypes.object.isRequired
	};
	render() {
		const { children } = this.props;
		return(
			<div className="App" >
      			<Header title="CodeCS" items={items}/>
      			<Content body = { children }/>
      			<Footer />
      		</div>
		);
	}
}
export default App;
