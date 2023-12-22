import React , { useEffect, useContext } from 'react';
import './ProductList.css';
import fetchProducts from '../../api/fetchProducts';
import ProductView from '../ProductView/ProductView';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function ProductList() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);


  useEffect(() => {

    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });

  }, []);


  return (
    (loading ? <Loading /> : <section className="products container">
      {
        products.map((product) => <ProductView key={product.id} data={product} />) 
      }
    </section>)
  );
}

export default ProductList ;  	
