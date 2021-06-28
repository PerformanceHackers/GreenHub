import React  from 'react';


import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  
  return (
    <div >
      <BrowserRouter basename={'/'} >
   <Home />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
