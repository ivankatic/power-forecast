import React, { Component } from 'react';
import FormLatLng from './FormLatLng';
import FormSpecs from './FormSpecs';
import Modal from './Modal';
import { connect } from 'react-redux';

class PowerPlantData extends Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = {
			page: 1,
			show: false,
			disableLatLng: true,
		};
	};

	manualLatLng = () => {
		this.setState((prevState) => ({
			disableLatLng: !prevState.disableLatLng,
		}));
	};

	showModal = (e) => {
		this.setState({
			show: !this.state.show,
		});
	};

	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

	render() {
        /* const { onSubmit } = this.props; */
		const { page } = this.state;
		return (
			<div>
				<Modal
					show={this.state.show}
					onClose={this.showModal}
					addMapValues={this.addMapValues}
				/>
				<main className='box'>
					<h1 className='box__title'>Solar power forecast</h1>

					<div>
						{page === 1 && (
							<FormLatLng
								onSubmit={this.nextPage}
								showModal={this.showModal}
								disableLatLng={this.state.disableLatLng}
								manualLatLng={this.manualLatLng}
								lat={this.props.lat}
								lng={this.props.lng}
							/>
						)}

						{page === 2 && (
							<FormSpecs
								previousPage={this.previousPage}
								onSubmit={this.onSubmit}
							/>
						)}
					</div>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return { 
        lat: state.location.lat,
        lng: state.location.lng,
    };
}

/* PowerPlantData.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}; */



export default connect(mapStateToProps)(PowerPlantData);