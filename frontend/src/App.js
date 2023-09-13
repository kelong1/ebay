import React from 'react';

import './App.css';
import { AddProduct } from './components/AddProduct';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { UpdateProduct } from './components/UpdateProduct';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      
      <Routes>
      <Route exact path ="/Home" element={<Home/>}/>
      <Route exact path ="/Login" element={<Login/>}/>
      <Route exact path ="/Register" element={<Register/>}/>
      <Route exact path ="/AddProduct" element={<AddProduct/>}/>
      <Route exact path ="/UpdateProduct" element={<UpdateProduct/>}/>
      </Routes>
      </Router>
      </div>
  );
}

export default App;
