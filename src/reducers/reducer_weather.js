import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); this also works
            // idea is not to manipulate data
            return [action.payload.data, ...state];
    }
    console.log("action => ", action);
    return state;
}