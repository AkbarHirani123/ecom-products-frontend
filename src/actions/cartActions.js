// import { getState } from 'react-redux';
import Axios from 'axios';
import Cookie from 'js-cookie';
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants';

const addToCartAction = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                img: data.img,
                price: data.price,
                quantityInStock: data.quantityInStock,
                qty
            }
        });

        const {cartDetails:{cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {
        
    }
}

const removeFromCartAction = (productId) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM, payload: productId
    });

    const {cartDetails:{cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addToCartAction, removeFromCartAction };