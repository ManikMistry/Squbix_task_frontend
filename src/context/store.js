import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducers';
import { addressReducer } from './reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  address: addressReducer
});

const store = createStore(rootReducer);

export default store;
