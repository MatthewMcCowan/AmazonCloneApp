import React from 'react'
import './CSS/header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                {/* search icon */} < SearchIcon className='header__searchIcon'/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__lineOne">Hello, Guest</span>
                    <span className="header__lineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__lineOne">Returns</span>
                    <span className="header__lineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__lineOne">Your</span>
                    <span className="header__lineTwo">Prime</span>
                </div>
            </div>

            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className='header__basketCount'>0</span>
            </div>

        </div>
    )
}

export default Header
