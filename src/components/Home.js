import React, {useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, getProducts} from '../actions/cartAction';
import Navbar from './Navbar';

const Home = () => {
    const dispatch = useDispatch()

    //set data in an Array to check 
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0)
    console.log("counter", count)
    const showdataSelector = useSelector(state => state.addedItems)
    console.log("showData", showdataSelector)
    const c = JSON.parse(localStorage.getItem('cart'))
    const [qty, setqty] = useState(1);
    console.log("cccccccccccc",c)

     const handleClick = (id, qty)=>{
         setCount(count + 1)
        dispatch(addToCart(id, qty)); 
    }

    useEffect(()=>{
        dispatch(getProducts())
    },[])

    useEffect(()=>{
        if(showdataSelector){
            setData(showdataSelector)
        }else{
            setData([])
        }
    },[showdataSelector])

    const searchfunction = (e) =>{
        let search = data.filter((i)=>{
            return(
                i.category.toLowerCase().includes(e.target.value)
            )
        })
        if(e.target.value === ""){
            let a = showdataSelector.map((i)=>{
                return{
                    quantity : 1,
                    data: i
                }
            })
            setData(a)
        }else{
            setData(search)
            
        }
      

    }

    const handleQty =(e)=>{
        setqty(e.target.value)
    }

    let itemList = data.map(item =>{
        return(
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.image} alt={item.title}/>
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClick(item)}}><i className="material-icons">add</i></span>
                </div>
                    <span className="card-title">{item.category}</span>
                <div className="card-content">
                    <p>{item.description}</p>
                    <p><b>Price: ${item.price}</b></p>
                    Quantity<input min="1" onChange={handleQty} className="cartNumber" placeholder={item.quantity} type="number" />
                </div>
            </div>
        )
    })
    return (
        <>
        <Navbar cart={c?c.length:null}/>
        <div className="container">
        <input className="search" type="search" title="Search here" placeholder="Enter here to search products by Title" onChange={searchfunction} />
            <h3 className="center">Our items</h3>
            <div className="box">
                {itemList}
            </div>
       </div>
       </>
    )
}

export default Home;