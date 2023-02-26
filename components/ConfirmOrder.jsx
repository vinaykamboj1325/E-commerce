import React from "react";
import { useState, } from "react";
import { Link, useNavigate } from "react-router-dom"


const ConfirmOrder = () => {

  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();


    navigate("/paymentsuccess")

  };

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input type="radio" name="payment" onChange={() => setPaymentMethod("COD")} />
          </div>
          <div>
            <label>Online</label>
            <input type="radio" name="payment" onChange={() => setPaymentMethod("Online")} />
          </div>

          <Link to="/paymentsuccess" type="submit">Place Order</Link>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
