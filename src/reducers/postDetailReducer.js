export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_POST_BY_ID':
            return action.payload
            default:
                return state;

    }
}