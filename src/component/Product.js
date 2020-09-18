import React from "react";
import "./CSS/product.css";

// Props are introduced after inital html and css are complete
function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      {/* There are three items inside product */}
      <div className="product__info">
        {/* Three items inside product info */}
        <h3>{title}</h3>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      {/* Style Later for better button */}
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
