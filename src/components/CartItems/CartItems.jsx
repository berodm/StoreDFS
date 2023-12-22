import React, { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItems.css';
import propTypes from 'prop-types';
import formatCurrency from '../../utilities/formatCurrency'; 
import AppContext from '../../context/AppContext';

function CartItems({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;
  
  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id != id);
    setCartItems(updateItems);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="imagen del producto" className="cart-item-image"/>

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
        <button type="button" className="button-remove-itens" onClick={ handleRemoveItem }>
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItems;


CartItems.propTypes = {
  data: propTypes.object
}.isRequired;

