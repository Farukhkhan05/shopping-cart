import {ADD_TO_CART, GET_PRODUCT, REMOVE_TO_CART, BUY_NOW, CHECK_OUT, LOGIN_USER, REGISTER_DATA,LOGOUT} from '../actions/action-types/cart-actions';

const initialState = {
    addedItems: "",
    cartData :[], 
    buyData : "",
    updateData: [],
    login: false,
    alert: "",
    login_user: "",
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
            let local = JSON.parse(localStorage.getItem("cart"))
            console.log("localstrorage",local)
            let arr =[]
            if(local){
                local.push(action.payload)
                localStorage.setItem("cart", JSON.stringify(local))
            }else{
                arr.push(localStorage.setItem("cart", JSON.stringify(arr)))
            }
            return{
                ...state,
                CartData : JSON.parse(localStorage.getItem("cart"))
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
        case BUY_NOW:
            {
                let data = JSON.parse(localStorage.getItem('cart'));
                console.log("dataaaaaa ", data);
                console.log("dataaaaaa ", data[action.payload.data]);
                if(data)
                {
                    if(window.confirm("Are you sure to buy Item "+data[action.payload.data].description+"Price is : "+data[action.payload.data].price+"quantity is : "+action.payload.qty))
                    {
                        alert("order placed successfully")
                        data.splice(action.payload,1)
                        localStorage.setItem('cart',JSON.stringify(data))
                    }
                    else{
                        alert("Purchasing cancel")
                    }
                }

                return ({
                    ...state,
                    buyData: data[action.payload]
                })
            }
        case CHECK_OUT:{
    
            return ({ ...state, cartData: [] })
        }   
        
        case REGISTER_DATA: {
            let data = action.payload;
            let arr1 = []
            let arr = JSON.parse(localStorage.getItem("Register_Data"));
            if (arr) {
                arr.push(data)
                localStorage.setItem("Register_Data", JSON.stringify(arr))
            }
            else {
                arr1.push(data)
                localStorage.setItem("Register_Data", JSON.stringify(arr1))
            }
        }
        // case LOGIN_USER:
        //     {
        //         let data = action.payload.data
        //         console.log("data ", data);
        //         localStorage.setItem("user", JSON.stringify(data))
        //         let local = JSON.parse(localStorage.getItem("Register_Data"))
        //         let token = JSON.parse(localStorage.getItem("Token"))

        //         console.log((local));
        //         local && local.map((i) => {
        //             if (i.UName === data.UName && i.Pass === data.Pass) {
        //                 debugger
        //                 localStorage.setItem("Token", JSON.stringify(true));
        //                 state.login = true
        //                 state.login_user = i
        //                 window.location.href = "/"

        //                 debugger
        //             }
        //         })
        //     }
            case LOGOUT:
            {
                localStorage.setItem("Token", false)
                return ({
                    type: LOGOUT,
                    ...state,
                })
            }
        
        default:
            return{
                state
            }
    }
}

export default cartReducer;