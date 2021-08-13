import React, {  } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {

    
    return (
        <div className="navbar">
            <h1 className="title_site"><Link to="/">ShopMarv</Link></h1>
            <button hidden></button>
            <ul className="navItem">
                <li className="navItem_item"><Link to="/auth" className="item_link"><i className="fas fa-user"></i></Link></li>
                <li className="navItem_item"><Link to="/panier" className="item_link"><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </div>
    )
}

export default Navbar
