import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import clutchLogo from '../assets/clutch-logo.svg';
import AdvantageCard from '../components/AdvantageCard'
import CostEffecient from '../assets/Cost-effectivenesss.png';
import Scalability from '../assets/Scalabilityy.PNG';
import Innovative from '../assets/Innovativee.png';
import Industry from '../assets/Industryy.PNG';
import SolutionsCard from '../components/SolutionsCard';
import WhatWeUse from '../components/WhatWeUse';
import { Swiper, SwiperSlide } from 'swiper/react';
import UndergroundLogo from '../assets/undergroup-1024x743.jpg';
import NespressoLogo from '../assets/nespresso-logo-1.png';
import Insurance from '../assets/Insurance-1024x743.png';
import Reviews from '../components/Reviews';
import ContactUs from '../components/ContactUs';
import Image2 from '../assets/Image2.JPG';
import Cyber from '../assets/Cyber.JPG';
import Consulting from '../assets/Consulting.JPG';
import Web from '../assets/Web.JPG';
import Mobile from '../assets/Mobile.JPG';
import Cloud from '../assets/Cloud.JPG';
import industry1 from "../assets/industry1.webp";
import industry2 from "../assets/industry2.webp";
import industry3 from "../assets/industry3.webp";
import industry4 from "../assets/industry4.webp";
import industry5 from "../assets/industry5.webp";
import industry6 from "../assets/industry6.webp";
import Img1 from '../assets/acronis-logo2.webp';
import Img2 from '../assets/pngfind.webp';
import Img4 from '../assets/kisspng.png';





const Whatwedo = () => {
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
              <a href="https://clutch.co/profile/red-key-solutions#summary"><img src={clutchLogo} alt="clutchLogo" /></a>
              <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
            </p>
          </Col>

          <Col className="border-start border-3">
            <p className="fw-semibold m-0 ml-3 text-30px">20 <span className="review-secondary text-20px">Years</span></p>
            <p className="text-16px">Proven Track Record</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px">98 % <span className="review-secondary text-20px">+</span></p>
            <p className="text-16px">Customer Satisfaction</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px">1,500<span className="review-secondary text-20px">Projects</span></p>
            <p className="text-16px">We Have Completed</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px">3  <span className="review-secondary text-20px">Mins</span></p>
            <p className="text-16px">Average Answer Time</p>
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
              <a href="https://clutch.co/profile/red-key-solutions#summary"><img src={clutchLogo} alt="clutchLogo" /></a>
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
      <Container className='px-0'>
        <div className=" my-5">
          <div className="position-relative mx-lg-3 bg-dark text-white rounded p-4 ">
            {/* <img src={shapeDot} alt="" className="position-absolute d-none d-lg-flex bottom-1 end-0 px-5 py-2 " /> */}
            <p className="text-11px mb-5 fw-semibold what-we-do px-2 py-1 rounded bg-light text-dark">WHAT WE DO</p>
            <p className=" pt-5 display-5 bottom-0 fw-bold what-we-do-heading">Simplifying IT <br />for a complex world.</p>
          </div>
        </div>
      </Container>
     
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 py-4 border-bottom">
      <Col>
          <AdvantageCard imgPath={CostEffecient} heading={"Cost effectiveness"} description={"We offer affordable IT solutions that help you reduce costs and improve your bottom line."} />
          </Col>
          <Col>
            <AdvantageCard imgPath={Innovative} heading={"Innovative Technology"} description={"We stay up to date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition."} />
          </Col>
          <Col>
            <AdvantageCard imgPath={Industry} heading={"Expertise  Industry"} description={"We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs."} />
          </Col>
          <Col>
            <AdvantageCard imgPath={Scalability} heading={" Scalability"} description={"Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment."} />
          </Col>

        </div>

        <div className='blue-gray-gradient my-5'>
        <Container className='py-5'>
          <p className="text-11px fw-semibold how-we-do px-2 py-1 rounded">HOW WE DO</p>
          <p className="text-dark fw-bold display-5">Solutions</p>
          <Row xs={1} md={3}>
            <Col  className='py-2'>
              {/* <SolutionsCard path={'/managed-services'} imgPath= {Image2} heading={"Managedd Services"} description={"Liberate internal resources for core business activities by entrusting us with day-to-day IT support, management, and monitoring."} /> */}
              <img src={Image2} alt="" className='rounded'/>
            
            </Col>
            <Col className='py-2'>
                    {/* <SolutionsCard path={'/it-consulting'} imgPath= "{img2}" heading={"IT Consulting & Advisory"} description={"The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth "} /> */}
                    
                    <img src={Consulting} alt="" className='rounded'/>
            </Col>
            <Col className='py-2'>
              {/* <SolutionsCard path={'/cyber-security'} imgPath= "" heading={"Cyber Security"} description={"Identify vulnerabilities, evaluate risks, and establish robust security measures through our experts to safeguard your data and systems."} /> */}
              <img src={Cyber} alt="" className='rounded'/>
            </Col>
            <Col className='py-2'>
              {/* <SolutionsCard path={'/web-development'} imgPath= "" heading={"Web Development"} description={"Forge a compelling online presence and effectively connect with your target audience through our impactful web development services."} /> */}
              <img src={Web} alt="" className='rounded'/>
            </Col>
            <Col className='py-2'>
            <img src={Mobile} alt="" className='rounded'/>
              {/* <SolutionsCard path={'/mobile-development'} imgPath= "" heading={"Mobile Development"} description={"We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms."} /> */}
            </Col>
            <Col className='py-2'>
            <img src={Cloud} alt="" className='rounded'/>
              {/* <SolutionsCard path={'/cloud-services'} imgPath="" heading={"Cloud Services"} description={"Navigate cloud technology with confidence as we guide you to select the ideal cloud solutions that match your business aspirations."} /> */}
            </Col>
          </Row>
          <div className="text-center mt-5">
            <a href="#" className="btn primary-button contact-btn fw-semibold">View All Soultions</a>
          </div>
        </Container>
      </div>

      <Container className="py-4">
        <Row className="justify-content-center">
         
          <Col xs={8} className='py-5'>
            <div className="py-2">
              <p className="text-11px fw-semibold how-we-do px-2 py-1 rounded">HOW WE DO</p>
              <p className="text-dark fw-bold display-5">Solving IT challenges in every industry, every day.</p>
              <div className="container mt-4">
                <Row  md={4}>
                  <Col md={4} xs={12} className="mb-4 services-card d-flex align-items-center">
                    <div className="box d-flex align-items-center">
                      <img src={industry1} className="start-0 circle-img" alt="Image 1" />
                      <div className="mx-2">
                        <p className="fw-semibold m-0 pl-3">
                          Industry & Manufacturing
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={4} xs={12} className="mb-4 services-card d-flex align-items-center">
                    <div className="box d-flex align-items-center">
                      <img src={industry2} className="circle-img" alt="Image 1" />
                      <div className="mx-2">
                        <p className="fw-semibold m-0 pl-3">Transportation & Logistics
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={4} xs={12} className="mb-4 services-card d-flex align-items-center">
                    <div className="box d-flex align-items-center">
                      <img src={industry3} className="circle-img" alt="Image 1" />
                      <div className="mx-2">
                        <p className="fw-semibold m-0 pl-3">
                          Healthcare
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row md={4}>
                  <Col md={4} xs={12} className="mb-4 services-card d-flex">
                    <div className="box d-flex align-items-center">
                      <img src={industry4} className="start-0 circle-img" alt="Image 1" />
                      <div className="mx-2">
                        <p className="fw-semibold m-0 pl-3">
                          Banks & Insurance
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={4} xs={12} className="mb-4 services-card d-flex">
                    <div className="box d-flex align-items-center">
                      <img src={industry5} className="circle-img" alt="Image 1" />
                      <div className="mx-2">
                        <p className="fw-semibold m-0 pl-3">Consulting Providers
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={4} xs={12} className="mb-4 services-card d-flex">
                    <div className="box d-flex align-items-center">
                      <img src={industry6} className="circle-img" alt="Image 1" />
                      <div className="mx-2">
                        <p className="fw-semibold m-0 pl-3">
                          Non-Profit
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <a className="styled-blue-link text-decoration-none mt-auto"
              href="/">
              View All Industries
            </a>
          </Col>
        </Row>
      </Container>

      <WhatWeUse />

      <Container className="py-5">
        <p className="text-11px fw-semibold how-we-do px-2 py-1 rounded">WHERE WE DO</p>
        <p className="text-dark fw-bold display-5">Success Stories</p>

        <div className='row'>
            <div className='col-sm-4'><div className="card">
              <img src={Insurance} className="card-img-top custom-rounded p-3" alt="Insurance" />
              <div className="card-body pt-0 px-4 fw-semibold">
                <a href="#" className="text-11px light-gray hover-blue text-decoration-none">CLOUD HOSTING</a>
                <h5 className="card-title py-2"><a href="#" className="text-decoration-none hover-blue text-dark">Major Insurance
                  Provider Saves <br /> $750k per Month With Big Data <br /> Migration</a></h5>
                <p className="card-text text-secondary fw-normal">The company needed to complete a complex migration on a
                  tight deadline to avoid millions of dollars in post-contract fees and fines.</p>
                <div className="text-secondary">
                  <p className="mb-0">
                    <i className="bi bi-check fs-4"></i> Modern infrastructure
                  </p>
                  <p>
                    <i className="bi bi-check fs-4"></i> Consulting services
                  </p>
                </div>
                <a href="#" className="text-decoration-none text-14px text-dark">Learn more</a>
              </div>
            </div></div>
            <div className='col-sm-4'><div className="card">
              <img src={NespressoLogo} className="card-img-top custom-rounded p-3" alt="Nespresso" />
              <div className="card-body pt-0 px-4 fw-semibold">
                <a href="#" className="text-11px light-gray hover-blue text-decoration-none">IT CONSULTING</a>
                <h5 className="card-title py-2"><a href="#" className="text-decoration-none text-dark hover-blue">Maximizing
                  Efficiency  Technology Implementation – Coffee Success Story</a></h5>
                <p className="card-text text-secondary fw-normal">The company needed to complete a complex migration on a
                  tight deadline to avoid millions of dollars in post-contract fees and fines.</p>
                <div className="text-secondary">
                  <p className="mb-0">
                    <i className="bi bi-check fs-4"></i> Modern infrastructure
                  </p>
                  <p>
                    <i className="bi bi-check fs-4"></i> Consulting services
                  </p>
                </div>
                <a href="#" className="text-decoration-none text-14px text-dark">Learn more</a>
              </div>
            </div></div>
            <div className='col-sm-4'>
            <div className="card">
              <img src={UndergroundLogo} className="card-img-top custom-rounded p-3" alt="Underground" />
              <div className="card-body pt-0 px-4 fw-semibold">
                <a href="#" className="text-11px light-gray hover-blue text-decoration-none">MOBILE DEVELOPMENT</a>
                <h5 className="card-title py-2"><a href="#" className="text-decoration-none text-dark hover-blue">Strategic Move
                  to an AI-supported application for Public Safety Travel App in London</a></h5>
                <p className="card-text text-secondary fw-normal">The company needed to complete a complex migration on a
                  tight deadline to avoid millions of dollars in post-contract fees and fines.</p>
                <div className="text-secondary">
                  <p className="mb-0">
                    <i className="bi bi-check fs-4"></i> Modern infrastructure
                  </p>
                  <p>
                    <i className="bi bi-check fs-4"></i> Consulting services
                  </p>
                </div>
                <a href="#" className="text-decoration-none text-14px text-dark">Learn more</a>
              </div>
            </div>
            </div>
        </div>
        
      </Container>

      <Reviews  />
      <ContactUs />

      <Container className='py-5'>
        <Row>
          <Col>
            <p className="text-11px fw-semibold how-we-do px-2 py-1 rounded">WHERE WE DO</p>
            <p className="text-dark fw-bold display-5">Recognized by the best</p>
            <p className="light-gray text-20px">The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post contract fees and fines.</p>
          </Col>
          <Col md={5}>
          <img width="158" className='mx-4' src={Img4} alt="Img4" />
            <img width="158" className='mx-4' src={Img2} alt="Img2" />
            <img width="300" className='m-4' src={Img1} alt="Img1" />
          </Col>
        </Row>
      </Container>
     

    </div>
  )
}

export default Whatwedo