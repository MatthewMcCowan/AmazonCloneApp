import React from "react";
import "./CSS/payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../ContextAPI/StateProvider";
import { Link } from 'react-router-dom'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Deliver Address</h3>
          </div>
          <div className="payment__address">
            <p>{!user ? "User Not Loggin In" : user.email}</p>

            <address>
              Fake Apartments <br />
              1700 Wells Branch Parkway <br />
              Austin, TX 78728
            </address>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <h3 className="payment__title">Payment Method</h3>
          <div className="payment__details">{/* Stripe Magic */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
