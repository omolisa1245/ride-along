import './Available.css'
import React, { Component } from "react";
import Slider from "react-slick";
import img_6 from '../../assets/img_6.png'
import img_14 from '../../assets/img_14.png'
import img_7 from '../../assets/img_7.png'
import img_13 from '../../assets/img_13.png'



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Available = () => {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    return (
        <div className='available-container'>
            <div className="available-holder">
                <div className="available-box-holder">
                    <hr className='line1' />
                    <div className="available-box"></div>
                    <hr className='line2' />
                </div>
                <div className="available-details">
                    <h1>Available Service</h1>
                    <span>Service is Our attitude, And attitude is everything. We never sacrifice long-term
                        value for short-term results. We think big and optimise for what’s best for the whole
                        company, not only one team. Whenever we see problems outside our direct responsibility,
                        we speak up and help.</span>
                </div>
                <div className="available-selection">

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='regular'>
                                <span>Regular</span>
                                <img src={img_6} />
                            </div>
                            <div className='standard'>
                                <span>Standard</span>
                                <img src={img_14} />
                            </div>
                            <div className='executive'>
                                <span>Executive</span>
                                <img src={img_13} />
                            </div>
                            <div className='vip'>
                                <span>VIP</span>
                                <img src={img_7} />
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Available