

import React, { useState } from 'react';
import { Form, Button , ListGroup } from 'react-bootstrap';

const Submitform = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Mobile Number:', mobileNumber);
    // You can perform further actions or API calls here
  };

  return (
    <div className='p-5 max-width=50 pt-5 '>
      <Form onSubmit={handleSubmit}>
      <h5>Get a Quote from our experts.</h5>
      <p className='col-9'>Find the services you need and receive quotes
        from our team of Specialists.</p>

      <Form.Group className="mb-3 shadow-sm">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Search Services"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 shadow-sm">
        {/* <Form.Label>Mobile Number</Form.Label> */}
        <Form.Control
          type="tel"
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </Form.Group>

      
      <div  className="d-grid gap-2">
      <Button variant="dark" size="">
        Block level button
      </Button>
      </div>
      <ListGroup horizontal className="list-inline d-flex justify-content-around  mt-4 border-none">
      <ListGroup.Item>
      <h3>1000</h3>      
      <p>Clients</p> 
      </ListGroup.Item>
      <ListGroup.Item>
      <h3>1000</h3>      
      <p>Clients</p> 
      </ListGroup.Item>
    </ListGroup>
     
    </Form>
    </div>
  );
};

export default Submitform;
