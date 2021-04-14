import {ADD_TO_CART, GET_PRODUCT, REMOVE_TO_CART} from '../actions/action-types/cart-actions';

const initialState = {
    addedItems: "",
    cartData :[]
}

const cartReducer = (state = initialState, action) =>{
    console.log("Action", action)
    switch(action.type){
        case GET_PRODUCT :{
            return{
                ...state,
                addedItems : action.payload
            }
        }
        case ADD_TO_CART :{
            let localstrorage = JSON.parse(localStorage.getItem("cart"))
            console.log("localstrorage",localstrorage)
            let arr =[]
            if(localstrorage){
                localstrorage.push(action.payload)
                localStorage.setItem("cart", JSON.stringify(localstrorage))
            }else{
                arr.push(localStorage.setItem("cart", JSON.stringify(arr)))
            }
            return{
                ...state,
                CartData : arr
            }
        }
        case REMOVE_TO_CART :{
            console.log(" REMOVE_TO_CART ", action.payload);
                let removedata = state.cartData;
                 console.log("removeData ", removedata );
                removedata.splice(action.payload, 1)
                return ({
                    ...state,
                    cartData: removedata
                })
        }
        
        default:
            return{
                state
            }
    }
}

export default cartReducer;