import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import './App.css';
import React, { useState } from 'react'
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [mode1, setMode1] = useState('dark');
  const [mode2, setMode2] = useState('light');

  const setdark = () => {
    setMode1('light');
    setMode2('dark');
    document.body.style.backgroundColor = "black";
    // document.getElementsByClassName('container').style.backgroundColor="black";
  };
  const setlight = () => {
    setMode1('dark');
    setMode2('light');
    document.body.style.backgroundColor = "white";
    // document.getElementsByClassName('container').style.backgroundColor="white";
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode1} changedark={setdark} changelight={setlight} />
      <div className="container mt-5">
        <Routes>
          <Route exact path='/' element={<TextForm mode={mode2} opmode={mode1} />} />
          <Route exact path='/about' element={<About mode={mode2} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
