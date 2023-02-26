import React from "react";

const PaymentSuccess = () => {
  return (
    <section className="paymentsuccess">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order status below</p>
        <button to="/myorders">Check Status</button>
      </main>
    </section>
  );
};

export default PaymentSuccess;
