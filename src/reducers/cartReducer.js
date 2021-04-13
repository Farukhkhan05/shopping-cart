import {ADD_TO_CART} from '../actions/action-types/cart-actions';

const initialState = {
    addedItems:[]
}

const cartReducer = (state = initialState, action) =>{
    console.log("Action", action)
    switch(action.type){
        case ADD_TO_CART :{
            return{
                ...state,
                addedItems : action.payload
            }
        }
        default:
            return{
                ...state
            }
    }
}

export default cartReducer;