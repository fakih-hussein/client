import './App.css';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Router>

  );
}

export default App;
