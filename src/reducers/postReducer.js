import * as types from '../actions/types'

const initialState = {
    items: [],
    item: {

    }
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            console.log("working now")
            return {
                ...state,
                items: action.payload
            };
        case types.NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
};

export default postReducer;
