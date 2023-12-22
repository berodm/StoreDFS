import React, { useState, useContext } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar () {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);


    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return(
    <form className="search-bar" onSubmit={handleSearch}>
      <input type="search" value={searchValue} placeholder="Buscar Productos" className="search-input" required onChange={ ({target}) => setSearchValue(target.value)}/>
      <button type="submit" className="search-button">
        <RiSearch2Line />
      </button>
    </form>
  );

}

export default SearchBar;
