import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducers } from './reducer/ProductReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    productList: productListReducers,
}) 
// it's set to a name-value paramert
// which is a function which gets a state and an action and return a new state based on the action
const initialState = {}; //default state
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;