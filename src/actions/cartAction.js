import {ADD_TO_CART, GET_PRODUCT, REMOVE_TO_CART} from './action-types/cart-actions';
import axios from 'axios';

export const getProducts = (id) => dispatch => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((response)=>{
        console.log("Response", response);
        //dispatch the add cart action
        dispatch({type : GET_PRODUCT, payload : response.data})
    })
    .catch((err)=>{
        dispatch({type: GET_PRODUCT, payload :{data:false, err}})
    })  
}

export const addToCart = (data, qty) => dispatch =>{
    console.log("addToCartData", data);
    dispatch({type : ADD_TO_CART, payload : data, qutantity: qty })
}

export const removeToCart = (id) => dispatch =>{
    console.log("removeToCart", id);
    dispatch({type: REMOVE_TO_CART, payload :id})
}