import React from 'react'
import { Link } from "react-router-dom"
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import amazon__logo from "../assests/amazon-dark-logo-png-transparent.png"
import { useSelector } from "react-redux"

const Header = ({ cartData }) => {
  const cartQuantity = useSelector(state => state.cart.CartTotalQuantity);

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className='header__logo' src={amazon__logo} />
        </Link>

        <div className="header__search">
          <input type="text" value="" />
          <FiSearch />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionone">hellovinay</span>
            <span className="header__optiontwo">sign</span>
          </div>

          <div className="header__option">
            <span className="header__optionone">Return &</span>
            <span className="header__optiontwo">Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionone">Your</span>
            <span className="header__optiontwo">Prime</span>
          </div>
          <Link to="/cart">
            <div className="header__optionbasket">
              <FiShoppingCart />
              <span>
                {cartQuantity}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__bottom">
        <ul>
          <li>All</li>
          <li>Mobile</li>
          <li>Category</li>
          <li>Computer</li>
          <li>Clothes</li>
          <li>Shoes</li>
          <li>Electronics</li>
        </ul>
      </div>
    </>
  )
}

export default Header