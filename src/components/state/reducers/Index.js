import {combineReducers} from 'redux';
import orderReducer from './orderReducer';


const reducers = combineReducers({
    product: orderReducer
})

export default reducers