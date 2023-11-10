import React from 'react';

import './index.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import Layout from "./Components/Layout";
import Features from './Components/Features';
import Offer from './Components/Offer';
import Contact from './Components/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Header/>} />
            <Route path="features" element={<Features/>}/>
            <Route path="offer" element={<Offer/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
