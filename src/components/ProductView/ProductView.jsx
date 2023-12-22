import React, { useContext } from 'react';
import './ProductView.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../utilities/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductView({ data }) {

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {

    setCartItems([...cartItems,data]);
    
  };

  return (
    <section className="product-view">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card-image"/>
      <button type="button" className="button-add-cart" onClick={ handleAddCart }>
        <BsFillCartPlusFill />
      </button>
      <div className="product-info">
        <h2 className="product-price">{formatCurrency(price)}</h2>
        <h2 className="product-title">{title}</h2>

      </div>
      
    </section>
  );
}

export default ProductView ;

ProductView.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
