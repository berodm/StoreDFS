import React, { useContext } from 'react';
import './ShoppingCart.css';
import CartItens from '../CartItems/CartItems';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utilities/formatCurrency';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom/dist';

function ShoppingCart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acumulator, item) => {
    return item.price + acumulator;
  },0);

  return (

    <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
      <div className="cart-items">
        { cartItems.map ((cartItem) => <CartItens key= {cartItem.id} data={cartItem} />)}
      </div>
      <div className="cart-resume">
        {formatCurrency(totalPrice)}
      </div>
      <Link to="/login">
        { cartItems.length > 0 && <button className="button-finish"><FaArrowRight /></button> } 
      </Link>   
    </section>
  );
}

export default ShoppingCart ;
