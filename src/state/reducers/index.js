import {combineReducers} from 'redux';
import orderReducer from './orderReducer';


const reducers = combineReducers({
    data: orderReducer
})

export default reducers