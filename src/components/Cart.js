import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Cart = () => {

    const handleRemove = (id) =>{
        // dispatch(removeCartData(id))
         cartdata.splice(id, 1)
        localStorage.setItem('cart', JSON.stringify(cartdata))
        setdata(JSON.parse(localStorage.getItem('cart')))
    }

    const cartdata = JSON.parse(localStorage.getItem('cart'))
    // let arr = [];
    // let localstrorage = JSON.parse(localStorage.getItem('placedorders'))
    const [data, setdata] = useState(cartdata)
    console.log("ADAD",data)

    // const [id, setId] = useState();
    // const dispatch = useDispatch()
    // const [incre, setincre] = useState(data)
    console.log("cartdata ", cartdata);

    let addedItems = data.length ?
    (
    data.map((i,j)=>{
        return(
            <li class="collection-item avatar" key={i.id}>
                <div className="item-img">
                <img src={i.image} alt={i.item}/>
                </div>
                <div className="item-desc">
                <span className="title">{i.title}</span>
                <p>{i.desc}</p>
                <p><b>Price: {i.price}$</b></p>
                <p>
                    <b>Quantity: {i.quantity}</b> 
                </p>
                <div className="add-remove">
                    <Link to="/cart"><i className="material-icons" >arrow_drop_up</i></Link>
                    <Link to="/cart"><i className="material-icons" >arrow_drop_down</i></Link>
                </div>
                <button onClick={()=>{ handleRemove(j) }} className="waves-effect waves-light btn pink remove">Remove</button> 
                </div>
            </li>
        )
    })
    ):
    <p>
        Nothing
    </p>
    return (
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
                <li className="collection-item"><b>Total: {} $</b></li>
                <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </div>
    )
}

export default Cart;
