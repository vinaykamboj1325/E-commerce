import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { removeCartItem, increment, decrement, getTotals } from "../featurs/CartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const cartitemsData = useSelector(state => state.cart.cartItems);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const remove = (item) => {
    dispatch(removeCartItem(item))
  };

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  return (
    <section className="cart">
      <main>
        {
          cartitemsData?.map((item) => {
            return <div className="cartItem" key={item.id}>
              <div>
                <h4>{item.title}</h4>
                <img src={item.img} alt="Item" />
              </div>
              <div>

              </div>
              <div>
                <MdDelete onClick={() => remove(item)} />
                <div className="price">
                  <h3>₹{item.price}</h3>
                </div>
                <button onClick={() => dispatch(decrement(item))} >-</button>
                <input type="number" readOnly value={item.cartQuanity} />
                <button onClick={() => dispatch(increment(item))} >+</button>

                <div className="total">
                  <h4>₹{item.price * item.cartQuanity}</h4>
                </div>
              </div>
            </div>

          })
        }
        {
          cartitemsData.length === 0 ? <h1>Cart is Empty</h1> : <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹{cart.cartTotalAmount}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
          </article>
        }

      </main>
    </section>
  );
};

export default Cart;
