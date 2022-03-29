import {combineReducers} from 'redux';
import cartReducers from './cartReducers';

let reducers = combineReducers({
    cartReducers:cartReducers
})
const rootReducer = (state, action) => {
    return reducers(state, action);
}

export default rootReducer;