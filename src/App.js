// import logo from './logo.svg';
import './App.css';
// import { getByTitle } from '@testing-library/react';
import Navbar from './Navbar';
import Textform from './Textform';

function App() {
  return (
    <>
     <Navbar /*title ={"textFormate1"} */ />
     <div className="container">
     <Textform />
     </div>
     </>
    );
}

export default App;
