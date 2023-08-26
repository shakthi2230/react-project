import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const ContactUs = () => {
 

  return (
    <div className='container-fluid'>
      <div className="container-fluid contact-us-bg">
        <div className="row">
          <div className="col-12 px-0">
            <div className="position-relative bg-dark text-white rounded-top p-4 what-we-do-container">
              <p className="text-11px fw-semibold what-we-do px-2 py-1 rounded">CONTACT US</p>
              <p className=" display-5 pt-5 fw-bold what-we-do-heading">Partner with Us for<br />Comprehensive IT</p>
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12 col-md-6 py-5">
            <p className="fs-5">We re happy to answer any questions you may have and help you determine which of our services best fit your needs.</p>
            <a href="#" className="fs-5 hover-blue text-decoration-none text-dark fw-semibold">Call us at: 1-800-356-8933</a>
            <h4 className="pt-5">Your benefits:</h4>
            <div className="row">
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-dark  rounded-circle text-light"></i></div>
                <p className="px-2">Client-oriented</p>
              </div>
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-dark rounded-circle text-light"></i></div>
                <p className="px-2">Results-driven</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-dark  rounded-circle text-light"></i></div>
                <p className="px-2">Independent</p>
              </div>
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-dark  rounded-circle text-light"></i></div>
                <p className="px-2">Problem-solving</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-dark  rounded-circle text-light"></i></div>
                <p className="px-2">Competent</p>
              </div>
              <div className="col-md-4 d-flex">
                <div><i className="bi bi-check bg-dark rounded-circle text-light"></i></div>
                <p className="px-2">Transparent</p>
              </div>
            </div>
            <h4 className="pt-5 pb-sub2">What happens next?</h4>
            <div className="row">
              <div className="col-md-4 gap-2 d-flex">
                <p className="text-24px fw-semibold">1</p>
                <p className="pr-3">
                  We Schedule a call at your convenience</p>
              </div>
              <div className="col-md-4 gap-2 d-flex">
                <p className="text-24px fw-semibold">2</p>
                <p>
                  We do a discovery and consulting meeting</p>
              </div>
              <div className="col-md-4 gap-2 d-flex">
                <p className="text-24px fw-semibold">3</p>
                <p className="pr-3">
                  We prepare a proposal</p>
              </div>
            </div>
          </div>


          <div className=" col-md-6 ">
            <div className="bg-white py-3 rounded contact-form">
              <h2 className="text-center">Schedule a Free Consultation</h2>
              <hr />
              <form className="mx-4" >
                <div className="row mb-3">
                  <div className="form-group col-6">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName"   />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName"   />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Comapny / Organization</label>
                  <input type="email" className="form-control" name="email"  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="company">Company email</label>
                  <input type="text" className="form-control" name="company"   />
                </div>

                <div className="form-row mb-3">
                  <label htmlFor="phone">Phone </label>
                  <PhoneInput
                  country={"in"}
                    placeholder="Enter phone number"
                   />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="helpDropdown">How Can We Help You With</label>
                  <select className="form-control" name="helpDropdown" >
                    <option value="">Select an option</option>
                    <option value="Managed Services">Managed Services</option>
                    <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Other">Other</option>
                  </select>

                </div>

                <div className="form-group mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows="4"  />
                </div>

                <div className='py-2  d-flex justify-content-between'>
                  <div className="py-3">
                    <button type="submit" className="primary-button fw-semibold btn-block">Submit</button>
                  </div>
                  <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
