import React from 'react';

import './App.css';
import { AddProduct } from './components/AddProduct';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { UpdateProduct } from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Login/>
      <Register/>
      <AddProduct/>
      <UpdateProduct/>
      </div>
  );
}

export default App;
