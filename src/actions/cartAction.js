import {ADD_TO_CART} from './action-types/cart-actions';
import axios from 'axios';

export const addToCart = () => dispatch => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((response)=>{
        console.log("Response", response);
        //dispatch the add cart action
        dispatch({type : ADD_TO_CART, payload : response})
    })
    .catch((err)=>{
        dispatch({type: ADD_TO_CART, payload: err})
    })  
}
