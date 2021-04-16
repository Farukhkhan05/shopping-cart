import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { login_user, logoutSes } from '../actions/cartAction';
import {useSelector, useDispatch} from 'react-redux';

const Navbar = ({ cart, searchfunction }) =>{
    const data = useSelector(state => state.login_user)
    // const data = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("Token"))
    const da=JSON.parse(localStorage.getItem("user"));
    // console.log("dddddddddddddddddddd ", data);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutSes())
    }

    // const token=JSON.parse(localStorage.getItem("Token"))
    const user=JSON.parse(localStorage.getItem('user'))
    const LoginHandle = () => { 
        window.location.href="/login"
        // window.open("LoginPage")
    }
    console.log("cccc ",token,data);
    return(
        <>
            <nav className='nav-wrapper'>
                <div className='container'>
                    <Link to ='/' className='brand-logo left'>ShoppingCart</Link>

                    <ul className="right">
                    {/* <input className="search" type="search" title="Search here" placeholder="Enter here to search products by Title" onChange={searchfunction} /> */}
                    {/* <label className="Name">{token ? da.UName : <button className="login" onClick={LoginHandle} style={{width:"0%"}}>Login</button>}</label> */}
                        {/* <l1>{token && user.UName}</l1> */}
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        {/* <li><Link to='/Placed'>Orders</Link></li> */}
                        <li><Link to="/cart"><ShoppingCartIcon>shopping_cart<sup>{cart}</sup></ShoppingCartIcon></Link></li>
                        <button className="logout" title="logout" onClick={logout} style={{width:"0%"}}>{<ExitToAppIcon />}</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;