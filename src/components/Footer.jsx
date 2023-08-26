import React from 'react';

import ClutchLogo from '../assets/clutch-logo.svg';
// import dotBg from '../assets/footer-dots.svg';
import PrimaryButton from './PrimaryButton';

const Footer = () => {
  return (
    <div className='pt-5'>
        <div className='bg-black py-4 light-gray'>
        <div className="container row-container">
      <div className="row">
        <div className="col-md-6 ">
          <div className="mt-4">
            <h4 className="text-light">Solutions</h4>
            <div className="row my-2">
              <a href="" className="col-6 text-decoration-none light-gray">Managed services</a>
              <a href="" className="col-6 text-decoration-none light-gray">Mobile Development</a>
            </div>
            <div className="row my-2">
              <div className="col-6">IT Consulting & Advisory</div>
              <div className="col-6">Cloud Services</div>
            </div>
            <div className="row my-2">
              <div className="col-6">Cyber Security</div>
              <div className="col-6">Network Connectivity</div>
            </div>
            <div className="row my-2">
              <div className="col-6">Web Development</div>
              <div className="col-6">ERP Solutions</div>
            </div>

            <h4 className="text-light pt-5">Company</h4>
            <div className="row my-2">
              <a href="" className="col-6 text-decoration-none light-gray">About Us</a>
              <a href="" className="col-6 text-decoration-none light-gray">Blog</a>
            </div>
            <div className="row my-2">
              <div className="col-6">Why us</div>
              <div className="col-6">Case studies</div>
            </div>
            <div className="row my-2">
              <div className="col-6">Team</div>
              <div className="col-6">Events</div>
            </div>
            <div className="row my-2">
              <div className="col-6">Careers</div>
              <div className="col-6">FAQ</div>
            </div>
            <div className="row my-2">
              <div className="col-6">Partners & Certifications</div>
              <div className="col-6">Reviews & Awards</div>
            </div>
          </div>
        </div>

        <div className="col-md-6  d-lg-flex d-none justify-content-center align-items-center">
          <div className="text-center">
            <div className="position-relative">
              <h1 className='display-2 fonts'>LOGOIPUSIM</h1>

              <button type="submit" className="primary-button fw-semibold btn-block bg-light text-dark">Schedule Consultation</button>
             
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div className='mb-4'>
    <div className="container pt-4 d-none d-lg-flex">
      <div className="row">
        <div className="col">
          <p className="m-0 fw-semibold review-text d-flex align-items-center">
            <small className="text-secondary text-11px">REVIEWED ON </small>
            <span className="d-inline d-flex align-items-center px-3">
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
            </span>
          </p>

          <p className="d-flex align-items-center">
            <a href="#"><img src={ClutchLogo} alt="Clutch Logo"/></a>
            <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
          </p>
        </div>
        <div className="col border-start border-3">
          <p className="text-16px m-0">Seventh Ave, 20th Floor

New York, NY 10018 </p>
        </div>
        <div className="col border-start border-3">
          <p className="text-16px m-0">T: 1-800-356-8933</p>
          <p className="text-16px m-0">E: office@dummy.com</p>
        </div>
        <div className="col d-flex gap-4">
          <div>
            <a href="" className='social-link'>
            <i className="bi bi-linkedin fs-3"></i>
            <p className="m-0  text-14px">LinkedIn</p>
            </a>
          </div>
          {/* <div>
          <a href="" className='social-link'>
            <i className="bi bi-github fs-3"></i>
            <p className="m-0  text-14px">Github</p>
            </a>
          </div> */}
          <div>
          <a href="" className='social-link'>
            <i className="bi bi-twitter fs-3"></i>
            <p className="m-0  text-14px">Twitter</p>
            </a>
          </div>
          <div>
          <a href="" className='social-link'>
            <i className="bi bi-facebook fs-3"></i>
            <p className="m-0  text-14px">Facebook</p>
            </a>
          </div>
          <div>
          <a href="" className='social-link'>
            <i className="bi bi-youtube fs-3"></i>
            <p className="m-0  text-14px">Youtube</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  
    </div>
    <div className='d-flex justify-content-center'>
    <div className="d-flex  gap-3">
      <p className="text-14px">© 2023  </p>
      <p className="text-14px"><a href="/terms-conditions" className='text-black text-decoration-none'>Terms & Conditions</a></p>
      <p className="text-14px"><a href="/privacy-policy" className='text-black text-decoration-none'>Privacy Policy</a></p>
    </div>
    </div>
    </div>
  )
}

export default Footer