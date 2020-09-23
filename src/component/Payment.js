import React, { useState, useEffect } from "react";
import "./CSS/payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../ContextAPI/StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./../ContextAPI/reducer";
import axios from "./../axios/Axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  //State
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  //Need a useEffect to monitor changes in basket
  useEffect(() => {
    //this generates the clientSecret whenever basket changes

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      // whenever we make the backend this will make sense
      setClientSecret(response.data.clientSecret);
      //this is important, charges customer correct amount
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // Need a client secret that tells the exact payment
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
        // paymentIntent is confirmation of payment
      })
      .then(({ paymentIntent }) => {
        //if all is good
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        })

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    //This listens for changes in the CardElement and display errors
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
    // This is all literally lol  what is empty?
  };
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
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                
              </div>
              <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
