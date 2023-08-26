import React from 'react';


const Reviews = () => {
    return (
        <div className="testimonials d-none d-lg-flex">
            <div className="container-fluid">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/photo.png" alt="" />
                            <p>Tecnologia implemented such a powerful platform that we had no break in service when our employees had to work from home due to the COVID-19 pandemic. We weren’t concerned about how to shift to a remote working environment because Integris facilitated a seamless transition. </p>

                            <div className="organization">
                                <h5>Amanda Parks</h5>
                                <p>Network Manager, Healthcare Organization</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-between">
                    <div className="arrows">
                       
                    </div>
                    <div className="reviews">
                        <div className="review-1">
                            <div className="content-1">
                                <p>REVIEWED ON</p>
                                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt="" />
                            </div>
                            <div className="content-2">
                                <span className="d-inline d-flex align-items-center">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <p>31 REVIEWS</p>
                            </div>
                        </div>
                        <div className="review-2">
                            <div className="content-3">
                                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Google_22G22_Logo.svg" alt="" />
                            </div>
                            <div className="container">
                                <div className="content-4">
                                    <p>4.9</p>
                                    <span className="d-inline d-flex px-1">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </span>
                                </div>
                                <div className="content-5">
                                    <p>CUSTOMER REVIEWS</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
