import { createStore,  combineReducers } from 'redux';
import {addressReducer} from './reducers';
import { cartReducer } from './reducers';

const rootReducer=combineReducers({
    address: addressReducer,
    cart:cartReducer
})

const store = createStore(rootReducer);

export default store;