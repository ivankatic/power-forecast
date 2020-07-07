import solcast from '../api/solcast';
import history from '../history';

export const selectLocation = (location) => {
    return {
        type: 'SELECTED_LOCATION',
        payload: location
    };
};

export const fetchForecast = ({ latitude, longitude, capacity, tilt, azimuth, install_date }) => async dispatch => {
    const response = await solcast.get(`/world_pv_power/forecasts?format=json`, {
			params: {
				latitude,
				longitude,
				capacity,
				tilt,
				azimuth,
				install_date,
				hours: 168,
			},
		});

	dispatch({ type: 'FETCH_FORECAST', payload: response.data.forecasts });
	history.push('/forecast');
};