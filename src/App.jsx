import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';

import Header from './components/Header/Header';

import Provider from './context/Provider';

import ProductList from './components/ProductList/ProductList';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';



function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<>
            <Header />
            <ProductList />
            <ShoppingCart />
          </>} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
