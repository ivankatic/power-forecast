import React, { Component } from 'react';
import '../sass/main.scss';
import PowerPlantData from './PowerPlantData';

class App extends Component {
	render() {
		return (
			<div className='outer'>
				<PowerPlantData />
			</div>
		);
	}
}

export default App; 