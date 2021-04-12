import {ADD_TO_CART} from './action-types/cart-actions';

//add cart action
export const addToCart = (id) => dispatch => {
    dispatch({type : ADD_TO_CART, id})
}