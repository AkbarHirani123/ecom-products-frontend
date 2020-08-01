import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducer, productDetailsReducer } from './reducer/ProductReducers';
import { cartReducer } from './reducer/CartReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie'

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cartDetails: {cartItems}}; //default state

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cartDetails: cartReducer
}) 
// it's set to a name-value paramert
// which is a function which gets a state and an action and return a new state based on the action

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;