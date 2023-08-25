import React from 'react'
import { Col, Container, Row , Image } from 'react-bootstrap';
import logo from '../logo.svg';



const Page2 = () => {
  return (
    <div>
        <Container className='py-4' id="reviewSection">
        <Row className='d-none d-lg-flex'>
          <Col>
            <p className="m-0 fw-semibold review-text d-flex align-items-center">
              <small className="text-secondary text-11px">REVIEWED ON </small>
              <span className="d-inline d-flex align-items-center px-3">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
            </p>

            <p className="d-flex align-items-center">
            <a href="https://clutch.co/profile/red-key-solutions#summary"> <Image src={logo} alt="Clutch Logo" /></a>
              <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
            </p>
          </Col>

          <Col className="border-start border-3">
            <p className="fw-semibold m-0 ml-3 text-30px">30 <span className="review-secondary text-20px">Experts</span></p>
            <p className="text-16px">Dedicated Team Members</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px">85 <span className="review-secondary text-20px">+</span></p>
            <p className="text-16px">Industries Served</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px">2,000+ <span className="review-secondary text-20px">Clients</span></p>
            <p className="text-16px">Trust Our Services</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px">24/7 <span className="review-secondary text-20px">Support</span></p>
            <p className="text-16px">Always Available for You</p>
          </Col>
        </Row>
      <Row className="d-flex d-lg-none border-bottom">
      <Col>
            <p className="m-0 fw-semibold review-text d-flex align-items-center">
              <small className="text-secondary text-11px">REVIEWED ON </small>
              <span className="d-inline d-flex align-items-center px-3">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
            </p>

            <p className="d-flex align-items-center">
              {/* <a href="https://clutch.co/profile/red-key-solutions#summary"><img src={clutchLogo} alt="clutchLogo" /></a> */}
              <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
            </p>
          </Col>
      </Row>
      <Row className="d-flex d-lg-none p-2">
        <Col xs={6}>
        <p className="fw-semibold m-0 ml-3 text-20px">30 <span className="review-secondary text-16px">Experts</span></p>
          <p className="text-16px">Dedicated Team Members</p>
        </Col>
        <Col  xs={6}>
        <p className="fw-semibold m-0 text-20px">85 <span className="review-secondary text-16px">+</span></p>
            <p className="text-16px">Industries Served</p>
        </Col>
        <Col xs={6}>
        <p className="fw-semibold m-0 text-20px">2,000+ <span className="review-secondary text-16px">Clients</span></p>
            <p className="text-16px">Trust Our Services</p>
        </Col>
        <Col xs={6}>
        <p className="fw-semibold m-0 text-20px">24/7 <span className="review-secondary text-16px">Support</span></p>
            <p className="text-16px">Always Available for You</p>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Page2