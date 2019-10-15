import React, {Component} from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';
import ScrollToTop from './components/ScrollToTop.jsx';
import './assets/scss/app.scss'

class App extends Component {

	render() {
		return (
			<Router>
				<ScrollToTop>
					<div className="page-wrapper">
						<Header/>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						))}
						<Footer/>
					</div>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
