import React, { useState } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';


const carouselItems = [
    {
      title: 'Datacenter & Hosting',
      description: 'Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build, and operate.',
      link: '#',
    },
    {
      title: 'Collaboration',
      description: 'Despite modern cloud technology, your users operate in a familiar Microsoft Office environment and benefit from broad compatibility and low-threshold access.',
      link: '#',
    },
    {
      title: 'Cloud Plattform',
      description: 'Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device, anytime, anywhere.',
      link: '#',
    },
    {
      title: 'Network & Connectivity',
      description: 'Network topologies include hub, linear, tree, and star designs, each of which is set up differently to promote connectivity between computers or devices.',
      link: '#',
    },
  ];

const WhatWeUse = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < carouselItems.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="bg-dark  py-5">
        <Container>
        <p className="text-11px fw-semibold what-we-do px-2 py-1 rounded">WHAT WE USE</p>
      <p className=" fw-bold what-we-do-heading display-5">Bringing the best IT vendors to you.</p>
      <small className="text-light">Working only with the best, to ensure the quality of our services, and to bring state of
        the art technology to those who need it.</small>
        </Container>
        <div className='text-center py-5'>
      <div className=" d-inline-block ">
        <div className="controls bg-black p-2 rounded-top d-flex align-items-center">
          <Button className="rounded-circle bg-dark border-0 button-dimension d-flex align-items-center" onClick={prevCard}>
            <i className="bi bi-arrow-left-short fs-2 text-secondary "></i>
          </Button>
          <h4 className="text-light px-3">Your IT Challenges</h4>
          <Button className="rounded-circle bg-dark border-0 button-dimension d-flex align-items-center" onClick={nextCard}>
            <i className="bi bi-arrow-right-short fs-2 text-secondary "></i>
          </Button>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col border-5 black-border-top black-border-right">.</div>
        <div className="col border-5 black-border-top black-border-right">.</div>
        <div className="col border-5 black-border-top black-border-right">.</div>
        <div className="col border-5 black-border-top">.</div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="card-carousel">
              <div className="card-group">
                {carouselItems.slice(currentIndex, currentIndex + 3).map((item, index) => (
                  <div key={index} className="card mx-3 border-0 rounded challenges-container">
                    <div className="card-body bg-black  text-start">
                      <h5 className="card-title text-light text-20px">{item.title}</h5>
                      <p className="card-text text-secondary text-14px">{item.description}</p>
                      <div className="d-flex text-center">
                        <div className="bg-secondary  rounded-circle">
                          <i className="bi bi-plus px-1"></i>
                        </div>
                        <a href={item.link} className="px-2 text-decoration-none text-light text-12px">View More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default WhatWeUse;
