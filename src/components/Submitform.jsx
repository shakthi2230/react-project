import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Fromicon from '../assets/formicons.PNG';
import Agency from '../assets/agencyicon.PNG';

const Submitform = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic here
    console.log('Name:', name);
    console.log('Phone:', phone);
  };

  return (
    <div className="shadow-lg container mt-5 pt-3  rounded">
      
      <h2 className="overlay-heading">Get a Quote from our experts.</h2>
        <p>Find the services you need and receive quotes from our team of Specialists.</p>
        <Form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
                 
                  <select className="form-control" name="helpDropdown" >
                    <option value="">Select an option</option>
                    <option value="Managed Services">Search Services</option>
                    <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Other">Other</option>
                  </select>

                </div>

                <div className="form-row mb-3">
                  {/* <label htmlFor="phone">Phone </label> */}
                  <PhoneInput
                  country={"in"}
                    placeholder="Enter phone number"
                   />
                </div>

          <Button variant="dark" type="submit" className="submit-button p-3 mb-4">
            Submit
          </Button>

        <div className="inline-list d-flex justify-content-around p-4">
           
            <div className="list-item d-flex  mr-4 ">
                  <img src={Fromicon} alt="Image 1" />
                
            </div>
            <div className="vertical-line"></div>
            <div className="list-item d-flex  mr-4">
              <img src={Agency} alt="Image 2" />
              
            </div>
        </div>
        {/* <div className="icon-container text-center d-flex align-items-around">
            <div className="icon-with-text d-flex align-items-around">
              <i className="bi bi-building"></i>
              <strong className="bold-number">1000</strong>
              <p>Clients</p>
              <div className="vertical-line">|</div>
            </div>
            <div className="icon-with-text d-flex align-items-around">
              <div className="vertical-line"></div>
              <i className="bi bi-person"></i>
              <strong className="bold-number">1000</strong>
              <p>Agencies</p>
            </div>
        </div> */}

        </Form>

      
    </div>
  );
};

export default Submitform;

