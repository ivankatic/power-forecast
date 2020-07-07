export default (state={ lat: 0, lng: 0}, action) => {
    switch (action.type) {
        case 'SELECTED_LOCATION':
            return action.payload;

       default:
            return state;
    }
};