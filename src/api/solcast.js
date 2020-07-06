import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.solcast.com.au',
	 headers: {
		Authorization:
		    'Bearer oPQNBwt1v6bXPb5he-out_XYYfm_aVRg'
	}, 
});