import React from 'react'
import Submitform from './Submitform';
import Header from './Header'
import Hero from './Hero';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
  <div className='mb-5  container-fluid border-bottom border-3'>
    <div><Header/></div>
          <div className='row m-3 pb-5 '>
            <div className='col-sm-7 conatiner'><Hero/></div>
          <div className='col-sm-5  shadow-lg rounded '><Submitform/></div>
    </div>  

  </div>
  )
}

export default Home