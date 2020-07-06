import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FormLatLng from './FormLatLng';
import FormSpecs from './FormSpecs';
import Modal from './Modal';
import { connect } from 'react-redux';
import solcast from '../api/solcast';

class PowerPlantData extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
            show: false,
            disableLatLng: true
        };
    };

    onCalculateSubmit = async term => {
        const response = await solcast.get(
					`/world_pv_power/forecasts?format=json`,
					{
						    params: {
							latitude: this.props.lat,
							longitude: this.props.lng,
							capacity: 1,
							tilt: 45,
							azimuth: 135,
							install_date: '2015-09-25',
							hours: 10,
						},
					}
				);

        console.log(response);
    }

    manualLatLng = () => {
        this.setState(prevState => ({
            disableLatLng: !prevState.disableLatLng
        }));
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    };

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    };

    render() {
        // const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <div>
            <Modal show={this.state.show} onClose={this.showModal} />
            <main className='box'>
                <h1 className='box__title' onClick={this.onCalculateSubmit}>Solar power forecast</h1>

                    <div>
                        {page === 1 && <FormLatLng
                                            onSubmit={this.nextPage} 
                                            showModal={this.showModal} 
                                            disableLatLng={this.state.disableLatLng}
                                            manualLatLng={this.manualLatLng}
                                            lat={this.props.lat}
                                            lng={this.props.lng}
                                        />
                        }

                        {page === 2 && (
                            <FormSpecs
                                previousPage={this.previousPage}
                                onSubmit={this.nextPage}
                            />
                        )}
                    </div>

                    
            </main>
            </div>
        );
    }
}

/* PowerPlantData.propTypes = {
    onSubmit: PropTypes.func.isRequired
}; */

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        lat: state.location.lat,
        lng: state.location.lng,
    };
}

export default connect(mapStateToProps)(PowerPlantData);