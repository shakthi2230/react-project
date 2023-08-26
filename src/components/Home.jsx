import React from 'react'
import Submitform from './Submitform';
import Header from './Header'
import Hero from './Hero';



const Home = () => {
  return (
  <div className='mb-5  container-fluid border-bottom border-3'>
   
          <div className='row m-3 pb-5 '>
            <div className='col-sm-8 conatiner'><Hero/></div>
          <div className='col-sm-4 '><Submitform/></div>
    </div>  
    

  </div>
  )
}

export default Home