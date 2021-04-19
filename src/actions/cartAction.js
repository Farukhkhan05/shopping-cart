import {ADD_TO_CART, GET_PRODUCT, REMOVE_TO_CART, BUY_NOW, CHECK_OUT, REGISTER_DATA, LOGIN_USER } from './action-types/cart-actions';
import axios from 'axios';

export const getProducts = () => dispatch => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((response)=>{
        console.log("Response", response);
        dispatch({type : GET_PRODUCT, payload : response.data})
    })
    .catch((err)=>{
        dispatch({type: GET_PRODUCT, payload :{data:false, err}})
    })  
}

export const addToCart = (data, qty) => dispatch =>{
    console.log("addToCartData", data);
    //dispatch the add cart action
    dispatch({type : ADD_TO_CART, payload : data, qutantity: qty })
}

export const removeToCart = (id) => dispatch =>{
    console.log("removeToCart", id);
    dispatch({type: REMOVE_TO_CART, payload :id})
}

export const checkoutData = (id,c) => dispatch => {
    console.log("checkout id ", id,c);
    dispatch({
        type: BUY_NOW,
        payload: {data:id,qty:c}
    })
}

export const checkOut = () => dispatch => {
    dispatch({
        type: CHECK_OUT,
        payload: true
    })
}

export const RegisterUser = (data) => dispatch => {
    dispatch({ type: REGISTER_DATA, payload: data })
}

// export const login_user = (data) => dispatch => {
//     // console.log("login data ",data);
//     if (data === false) {
//         dispatch({ type: LOGIN_USER, payload: false })
//     }
//     else {
//         dispatch({
//             type: LOGIN_USER,
//             payload: { data: data, token: true }
//         })
//     }
// }

export const logoutSes = () => dispatch => { 
    // localStorage.setItem("Token",fal se)
    localStorage.removeItem("Token")
    window.location.href="/"
    dispatch("")
}