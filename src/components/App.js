import React, { Component } from 'react';
import '../sass/main.scss';
import PowerPlantData from './PowerPlantData';
import Forecast from './Forecast';
import { Router, Route } from 'react-router-dom';
import history from '../history';

class App extends Component {
	render() {
		return (
			<div className='outer'>
				<Router history={history}>
					<>
						<Route path='/power-forecast/' exact component={PowerPlantData} />
						<Route path='/power-forecast/forecast' component={Forecast} />
					</>
				</Router>
			</div>
		);
	}
}

export default App; 