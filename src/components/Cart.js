import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {checkoutData, checkOut} from '../actions/cartAction';
import Navbar from './Navbar';


const Cart = () => {
    const dispatch = useDispatch()
    const [count,setCount]=useState(1)
    const handleRemove = (id) =>{
        // dispatch(removeCartData(id))
         cartdata.splice(id, 1)
        localStorage.setItem('cart', JSON.stringify(cartdata))
        setdata(JSON.parse(localStorage.getItem('cart')))
    }

    const handleBuyNow = (id,c) => {
        dispatch(checkoutData(id,c))
        let token = JSON.parse(localStorage.getItem("Token"))
        if (token) {
            if (window.confirm("Are You Sure to buy Product " + cartdata[id].title + " Price is : " + cartdata[id].price + "Quantity is : " + cartdata[id].quantity)) {
                alert("Order Placed")
                if (local) {
                    local.push(cartdata[id]);
                    localStorage.setItem('placedorders', JSON.stringify(local))
                }
                else {
                    arr.push(cartdata[id])
                    localStorage.setItem('placedorders', JSON.stringify(arr))
                }
                cartdata.splice(id, 1);
                localStorage.setItem('cart', JSON.stringify(cartdata))
                setdata(JSON.parse(localStorage.getItem('cart')))
            }
        }
        else {
            alert("You need to Login First");
            window.location.href = "/login"
        }
    }

    const handleCheckOut = () => {
        dispatch(checkOut())
        let sum = 0;
        data.map((i) => {
            console.log(i);
            sum = sum + parseFloat(i.price)
            console.log("ssssss",sum)
        })
        let token = JSON.parse(localStorage.getItem("Token"))
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart.length != 0) {
             if (token) {
                if (window.confirm("Are You Sure to Buy all products price is : " + sum)) {
                    alert("Order placed successfully")
                    if (local) {
                        local.push(cartdata);
                        localStorage.setItem('All', JSON.stringify(local))
                    }
                    else {
                        arr.push(cartdata)
                        localStorage.setItem('All', JSON.stringify(arr))
                    }
                    setdata([])
                    localStorage.removeItem('cart')
                    window.location.href = "/"
                }
            }
            else {
                alert("You need to Login First");
                window.location.href = "/login"
            }
        }
        else {
            alert("cart is empty")
            window.location.href = "/"
        }
    }    

    const cartdata = JSON.parse(localStorage.getItem('cart'))
    let arr = [];
    let local = JSON.parse(localStorage.getItem('cart'))
    const [data, setdata] = useState(cartdata)
    console.log("ADAD",data)

    const [id, setId] = useState();
    console.log("cartdata ", cartdata);
    let sum=0;
    local&&local.map((i)=>{
        return sum=sum+i.price
    })

    const handleInput=(e)=>{setCount(e.target.value)}
    // useEffect(()=>{setdata(cartdata)},[cartdata])
    let addedItems = data ?
    (
    data.map((i,j)=>{
        return(
            <li className="collection-item avatar" key={i.id}>
                <div className="item-img">
                <img src={i.image} alt={i.item}/>
                </div>
                <div className="item-desc">
                <span className="title">{i.title}</span>
                <p>{i.desc}</p>
                <p><b>Price: {i.price}$</b></p>
                <p>
                    <b>Quantity: {i.quantity}</b> <input type="number" min="1" onChange={handleInput} placeholder="1"/>
                </p>
                <div className="add-remove">
                <button onClick={() => { handleBuyNow(j,count) }} className="Buynow">Buy Now</button>
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
        <>
        <Navbar/>
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
                <li className="collection-item"><b>Total: {sum} $</b></li>
                <div className="checkout">
                      <Link to="/login"><button onClick={handleCheckOut} className="waves-effect waves-light btn">Checkout</button></Link> 
                </div>
            </div>
            </>
    )
}

export default Cart;
