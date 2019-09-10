//Dependencies
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import App from "./components/App";
import How from './components/How';
import Areas from './components/Areas';

import About from './components/About';
import Queries from './containers/Query';


import Contact from './components/Contact';
import Home from './components/Home';

//Assets
import './index.css';

const AppRoutes = () =>
<App>
	<Switch>
		<Route path="/how" component={How}  />
		<Route path="/areas" component={Areas}  />
		<Route path="/about" component={About}  />
		<Route path="/queries" component={Queries}  />
		<Route path="/contact" component={Contact}  />
		<Route path="/" component={Home}  />

	</Switch>
</App>;

render(
	<Router>
		<AppRoutes />
	</Router>,
	document.getElementById("root")
);
