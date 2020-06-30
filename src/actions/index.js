export const selectLocation = (location) => {
    return {
        type: 'SELECTED_LOCATION',
        payload: location
    };
};