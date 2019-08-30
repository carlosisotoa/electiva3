//Dependencies
import React, { Component }  from "react";
import ReactDOM, { render} from "react-dom";
import Header from "./Global/Header";
import Content from "./Global/Content";
import Footer from "./Global/Footer";
//Assets
import './App.css';
class App extends Component{
	render(){
		return(
			<div className="App" >
      			<Header />
      			<Content />
      			<Footer />
      		</div>
		);
	}
}
export default App;
