//Dependencies
import React, { Component }  from "react";
import ReactDOM, { render} from "react-dom";

//Components
import Header from "./Global/Header";
import Content from "./Global/Content";
import Footer from "./Global/Footer";

//Data
import items from '../data/menu';
//Assets
import './App.css';
class App extends Component{
	render(){
		return(
			<div className="App" >
      			<Header title="CodeCS" items={items}/>
      			<Content />
      			<Footer />
      		</div>
		);
	}
}
export default App;
