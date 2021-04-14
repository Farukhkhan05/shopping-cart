import React, {useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, getProducts} from '../actions/cartAction';

const Home = () => {
    const dispatch = useDispatch()

    //set data in an Array to check 
    const [data, setData] = useState([]);

    const showdataSelector = useSelector(state => state.addedItems)
    console.log("showData", showdataSelector)

     const handleClick = (id)=>{
        dispatch(addToCart(id)); 
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
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <h3 className="center">Our items</h3>
            <div className="box">
                {itemList}
            </div>
       </div>
    )
}

export default Home;