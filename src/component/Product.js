import React from 'react'
import './CSS/product.css'

function Product() {
    return (
        <div className='product'>
            {/* There are three items inside product */}
            <div className="product__info">
                {/* Three items inside product info */}
                <h3>The Lean Startup</h3>
                <p className="product__price">
                    <small>$</small>
                    <strong>11.99</strong>
                </p>
                <div className="product__rating">
                    <p>​🤩</p>
                    <p>​🤩</p>
                    <p>​🤩</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" className='product__image'/>
            {/* Style Later for better button */}
            <button>Add To Basket</button>
        </div>
    )
}

export default Product
