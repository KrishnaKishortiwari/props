// import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import './App.css';
// import { getByTitle } from '@testing-library/react';
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
//import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('primary');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>

      <Router>
        <Navbar /*title ={"textFormate1"} */ mode={mode} toggleMode={toggleMode} />
        <div className="container" mode={mode}></div>
        <Routes>
          <Route path="about/*" element={<About/>} />
          <Route path="textform/*" element={ <Textform />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
