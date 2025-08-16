import {type FC} from 'react'
import './Navbar.css'
import { ItemsInCartHeader } from 'cart/ItemsInCartHeader'

const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <h5>MFE - MF Store</h5>
            {/* Add navigation links or other elements here */}
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
            <div className="cart-info">
                {/* <p>Cart Items: <span className='item-count'>0</span></p> */}
                <ItemsInCartHeader />
            </div>
        </nav>
    );
}

export default Navbar;