import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const {getTotalAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="names">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Location" />
        <div className="names">
          <input type="text" placeholder="Building" />
          <input type="text" placeholder="Room Number" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalAmount() === 0 ? 0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalAmount() === 0 ? 0:getTotalAmount() + 2}</p>
            </div>
            <hr />
          </div>

          <button>
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
