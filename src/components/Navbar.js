import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = () =>{
    return(
        <>
            <nav className='nav-wrapper'>
                <div className='container'>
                    <Link to ='/' className='brand-logo left'>ShoppingCart</Link>

                    <ul className="right">
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to="/cart"><ShoppingCartIcon>shopping_cart</ShoppingCartIcon></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;