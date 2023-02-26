import React from 'react'
import poster from "../assests/mainbackground.webp"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getTotals } from '../featurs/CartSlice';



const Home = () => {

  const data = useSelector(state => state.cart.items.products);

  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    dispatch(addToCart(item))
  };



  return (
    <>
      <div className="home">

        <div className="poster">
          <img src={poster} alt="" />
        </div>
        <div className="home__products">

          {
            data?.map((item) => {
              return <div className="cart__item" key={item.id}>

                <img src={item.img} alt="" />

                <div className="details">
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                  <button onClick={() => handleAddCart(item)} >Add to Basket</button>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </>
  )
}

export default Home