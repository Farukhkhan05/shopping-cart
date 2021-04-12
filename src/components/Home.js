import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from './actions/cartActions';

const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>
            
            <h1>Home</h1>
        </div>
    )
}

export default Home;
