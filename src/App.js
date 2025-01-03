import './App.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/HomePage/Home';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Footer/>
    </div>
  );
}

export default App;
