import React, { useState ,useContext} from 'react';
import AppContext from '../context/AppContext';
import { Link } from "react-router-dom";
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle,setToggle] = useState(false);
    const [toggleOrders,setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle); 
    }


    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/password-recovery">password-recovery</Link></li>
                    <li><Link to="/send-email">send-email</Link></li>
                    <li><Link to="/new-password">new-password</Link></li>
                    <li><Link to="/account" >account</Link></li>
                    <li><Link to="/signup" >signup</Link></li>
                    <li><Link to="/checkout" >checkout</Link></li>
                    <li><Link to="/orders" >orders</Link></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu /> }
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;