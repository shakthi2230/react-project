import React from 'react'
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='container'>
        <div>
        <h1 className={`fw-medium nav-heading display-2 }`}>
              We Build, Operate, Transform your businesses <span className="gradient-textbody fw-bold text-primary">Digitally</span>
        </h1>
        <div className='col-9'>
        <p className="fs-5 py-3 text-bol ">
              <h3>Take charge of your business continuity with innovative IT solutions</h3>
        </p>
        </div>
      <div className='mt-5'>
          <Button variant="dark" className="me-2 p-2 ">Schedule a Free Consultation</Button>
         <Button variant="light" className='p-2'>Services</Button>
      </div>
        </div>
      
    </div>
  )
}

export default Hero