import React, { Component } from 'react';
import '../sass/main.scss';
import Modal from './Modal';

class App extends Component {
	state = {
		show: false
	};
	
	showModal = e => {
		this.setState({
			show: !this.state.show
		});
	};

	render() {
		return (
			<div className='outer'>
				<Modal show={this.state.show} onClose={this.showModal}/>
				<main className='box'>
					<h1 className='box__title'>Solar power forecast</h1>

					<div className='box__content'>
						<p className='box__instructions'>
							Please select the power system location
						</p>
						<button className='button--wide' onClick={e => {
							this.showModal(e);
						}}>Select on map</button>

						<div className='manual'>
							<input
								type='checkbox'
								id='manual'
								name='manual'
								className='manual__checkbox'
							/>
							<label htmlFor='manual' className='manual__label'>
								<span className='manual__checkbox-button'></span>
								Enter latitude and longitude manually
							</label>
						</div>
					</div>

					<button className='button--wide u-side-padding'>Next</button>
				</main>
			</div>
		);
	}
}

export default App; 