import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import "./CSS/product.css";

// Props are introduced after inital html and css are complete
function Product({ id, title, price, rating, image }) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }
  //console.log(basket)
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
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
