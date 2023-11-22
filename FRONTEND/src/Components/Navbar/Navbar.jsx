import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu, setMenu] = useState('shop');
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='Logo' />
            <p>Shooper</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu('shop')}}><Link to='/' as="a">Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link to='/men' as='a'>Men</Link>{menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><Link to='/women' as='a'>Woman</Link>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link to='/kids' as='a'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt='Cart Icon'/></Link>
            <div className="nav-bar-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
