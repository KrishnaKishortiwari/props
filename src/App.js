// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { getByTitle } from '@testing-library/react';
import Navbar from './Navbar';
import Textform from './Textform';

function App() {
 
   const [ mode, setMode] = useState('dark');
   const toggleMode = () =>{
     if(mode === 'dark')
     {
      setMode('primary');
       document.body.style.backgroundColor = 'white';
     }else{
       setMode('dark');
       document.body.style.backgroundColor = 'grey';
      }
      
   }
  return (
    <>
     <Navbar /*title ={"textFormate1"} */ mode={mode} toggleMode={toggleMode}/>
     <div className="container"  mode={mode}>
     <Textform />
     </div>
     </>
    );
}

export default App;
