import Item1 from '../images/item1.jpg';
import Item2 from '../images/item2.jpg';
import Item3 from '../images/item3.jpg';
import Item4 from '../images/item4.jpg';
import Item5 from '../images/item5.jpg';
import Item6 from '../images/item6.jpg';

import {ADD_TO_CART} from './action-types/cart-actions';

const initialState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}

const cartReducer = (state = initialState, action) =>{

    //inside home component
    if(action.type === ADD_TO_CART){
        console.log("Action", action)
        let addedItem =state.addedItems.find(item => item.id === action.id)
        console.log("addedItem", addedItem)

        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        console.log('existed_item', existed_item)
        if(existed_item){
            addedItem.quantity += 1
            return{
                ...state,
                 total: state.total + addedItem.price 
            }
        }else{
            addedItem.quantity = 1;

            //calculating the total
            let newTotal = state.total + addedItem.price
            console.log("newTotal", newTotal);
        }
    }
}

export default cartReducer;