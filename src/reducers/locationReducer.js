export default (location={ lat: 0.0000, lng: 0.0000}, action) => {
    switch (action.type) {
        case 'SELECTED_LOCATION':
            return action.payload;

        default:
            return location;
    }
};