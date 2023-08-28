import React from 'react'
import  Home  from './components/Home';
import Whatwedo from './components/Whatwedo';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
       
      <div><Home/></div> 
      <div><Whatwedo/></div> 
      <div><Footer/></div>
      

    </div>
  )
}

export default App