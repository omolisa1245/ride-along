import React from 'react'
import './About.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import rating from '../../assets/rating.png'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaNairaSign } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { MdDiscount } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import driver1 from '../../assets/driver1.jpg'
import driver2 from '../../assets/driver2.jpg'
import driver3 from '../../assets/driver3.webp'
import driver4 from '../../assets/driver4.jpg'
import driver5 from '../../assets/driver5.webp'
import driver6 from '../../assets/driver6.jpg'
import driver7 from '../../assets/driver7.webp'
import driver8 from '../../assets/driver8.jpg'
import driver9 from '../../assets/driver9.jpg'
import driver10 from '../../assets/driver10.jpeg'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import passenger1 from '../../assets/passenger1.webp'
import passenger2 from '../../assets/passenger2.jpg'
import passenger3 from '../../assets/passenger3.jpeg'
import passenger4 from '../../assets/passenger4.webp'
import passenger5 from '../../assets/passenger5.webp'
import passenger6 from '../../assets/passenger6.jpeg'
import customer_sat from '../../assets/customer_sat.png'


import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";







const About = () => {
  const navigate = useNavigate();



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div>
      <div className="about-container">

        <div className="about-header">
          <div className="about-header-overlay">

            <div className="design-cont">
              <div className="design-left">
                <div className="design1"></div>
                <div className="design2"></div>
              </div>
              <div className="design3"></div>
            </div>

            <div className="about-header-content">
              <h1>About us</h1>
              <div className="about-header-content-below">
                <IoHomeOutline className='about-header-svg' />
                <span onClick={() => navigate('/')} >Home</span>
                <IoIosArrowForward className='about-header-svg' />
                <p>About us</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="about-body1">
        <div className="about-body1-container">
          <div className="about-body1-container-left">
            <div className="about-body1-topic">
              <h1>About RideAlong</h1>
              <hr className='abc-line1' />
            </div>
            <span>RideAlong was launched in 2024 by Omolisa Olayemi, having noticed online comparison sites for flights,
              trains and car rentals but none for the cab sector. Given the Nigeria is one of the African's largest cab
              markets with more spent on cabs than all other transport modes combined,
            </span><br /><br />

            <span>We’re Nigeria largest cab comparison service with over 1,000 licensed Cab Operators fulfilling
              trips in over 550 Nigeria towns & cities; we’re also the Nigeria highest-rated cab service on Trustpilot.
              Our award-winning technology does the hard work of making it easy for you to instantly compare and
              book quotes from independently rated cab providers via our website, mobile app, and travel partners.
            </span>
            <button>Read More</button>
          </div>

          <div className="about-body1-container-right">
            <h3>Local Travel</h3>
            <p>Navigating through Nigeria has never been easier. With RideAlong, you can explore the cities,
              towns, and rural areas with ease and comfort. Our local travel services are designed to cater to all
              your short-distance travel needs.</p><br />
            <h3>Outstation Trips</h3>
            <p>Planning a getaway or a business trip outside Lagos? Our outstation cab services cover all
              major cities and tourist destinations across Nigeria. Enjoy the flexibility of choosing a one-way trip
              or a round trip, as per your convenience.</p><br />
            <h3>Corporate Travel</h3>
            <p>MyTaxiCab offers specialized services for corporate clients. Our corporate travel solutions are
              tailored to meet the unique needs of business travelers, providing a comfortable and efficient
              travel experience.</p>

          </div>

        </div>

      </div>


      <div className="about-payment-card-container">

        <div className="about-payment-topic">
          <h1>Our packages</h1>
          <p>As our world transitions to Electric Vehicles and, later, Autonomous ‘self-driving’ cars,
            RideAlong can relentlessly leverage its smart, proprietary technology to help customers and
            businesses enjoy a great cab experience at a nice price wherever they are in the Nigeria.
          </p>
        </div>

        <div className="about-payment-card1">
          <div className="apc-1">
            <img src={rating} alt="" />
            <h3>Trip Rating</h3>
            <p>Our rating facility enables riders to rate the driver while the driver can also rate the rider.
              These ratings and reviews provide us with information to continuously improve your riding experience with us
            </p>
            <button className='apc-b6'>Learn More</button>
          </div>
          <div className="apc-2">
            <FaMoneyBillTrendUp className='apc-logo' />
            <h3>Ride and Earn</h3>
            <p>For every completed ride with us, you get a bonus that will give you a TimeDrive discount on your next ride.
            </p>
            <button className='apc-b1'>Learn More</button>
          </div>

          <div className="apc-3">
            <FaNairaSign className='apc-logo' />
            <h3>Payment</h3>
            <p>We have a secure payment system that makes it very easy and comfortable for you to pay for trips.</p>
            <button className='apc-b2'>Learn More</button>
          </div>
        </div>
        <div className="about-payment-card2">
          <div className="apc-4">
            <SiAdguard className='apc-logo' />
            <h3>Safety Guarantee</h3>
            <p>when it matters most. Our personnel are among the most skilled professionals and
              our medical and security teams are staffed
            </p>
            <button className='apc-b3'>Learn More</button>
          </div>
          <div className="apc-2">
            <MdDiscount className='apc-logo' />
            <h3>Discount and promo</h3>
            <p>Upgrade your ride experience with our RideAlong premium membership! Enjoy exclusive discounts,
              member-only deals, and special perks.
            </p>
            <button className='apc-b4'>Learn More</button>
          </div>

          <div className="apc-3">
            <LuNotebookPen className='apc-logo' />
            <h3>Instance Feedback</h3>
            <p>Get a TimeDrive Report and Receipt while you enjoy your journey.</p>
            <button className='apc-b5'>Learn More</button>
          </div>
        </div>
      </div>

      <div className="driver-review">
        <div className="driver-topc">
          <h1>Our Professional Drivers</h1>
          <p>We hire Professionals. They are always there, everywhere, to serve you better.</p>
        </div>
        <div className="driver-container">

          <div className="driver-slider-container">
            <Slider {...settings}>

              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver1} alt="" />
                  <div className="driver-image-details">
                    <h3>OLuwaseun Thomas</h3>
                    <span>Truck Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>


              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver2} alt="" />
                  <div className="driver-image-details">
                    <h3>Beauty Adams</h3>
                    <span>Junior Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>


              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver3} alt="" />
                  <div className="driver-image-details">
                    <h3>Patric Umoho</h3>
                    <span>Senior Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>


              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver4} alt="" />
                  <div className="driver-image-details">
                    <h3>Taiwo Bamidele</h3>
                    <span>Senior Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>


              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver5} alt="" />
                  <div className="driver-image-details">
                    <h3>Ireoluwa Temitolpe </h3>
                    <span>Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>


              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver6} alt="" />
                  <div className="driver-image-details">
                    <h3>Charles Okafo</h3>
                    <span>Junior Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>
              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver7} alt="" />
                  <div className="driver-image-details">
                    <h3>Peter Mattew</h3>
                    <span>Truck Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>
              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver8} alt="" />
                  <div className="driver-image-details">
                    <h3>Bolatito Ajayi </h3>
                    <span>Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>
              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver9} alt="" />
                  <div className="driver-image-details">
                    <h3>Peace Okoli</h3>
                    <span>Senior Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>
              <div className="driver-image1-container">
                <div className="driver-image-holder">
                  <img src={driver10} alt="" />
                  <div className="driver-image-details">
                    <h3>Iremide Pelumi</h3>
                    <span>Driver</span>
                    <div className="driver-social">
                      <FaInstagram className='driver-social-img' />
                      <FaSquareFacebook className='driver-social-img' />
                      <FaSquareXTwitter className='driver-social-img' />
                      <FaLinkedin className='driver-social-img' />
                    </div>
                  </div>

                </div>
              </div>

            </Slider>
          </div>

        </div>

      </div>

      <div className="customer-review-container">
        <div className="customer-review-holder">
          <div className="customer-slider-container">
            <div className="customer-review-topic">
              <h5>Customers Feedback</h5>
              <h1>Our Customer Reviews.</h1>
              <span>Whether you are travelling long distances by private taxi or are looking for budget-friendly
                transport around your city, our listings offer a range of options, including 7-seater taxis.
              </span>
            </div>
            <div className="customer-review-main">

              <div className="customer-reiview-card">
                <img className='customer-img' src={passenger1} alt="" />
                <img className='customer-icon' src={customer_sat} alt="" />
                <p>“We used Your Driver for our wedding day. Not only did they pickup the bride and drive her to
                  the ceremony. They did an awesome job at getting our 40 guests and their cars home safely after
                  the reception. Cant say enough good things on how professional they were. 6 Stars!”
                </p>
                <div className="customer-review-card-below">
                  <h3>Adams Smith</h3>
                  <span>HR Personel</span>
                </div>
              </div>

              <div className="customer-reiview-card">
                <img className='customer-img' src={passenger2} alt="" />
                <img className='customer-icon' src={customer_sat} alt="" />
                <p>“We used YourDriver on our wedding day and quite honestly, Joel went above and beyond. Not only 
                  did he stay longer to make sure my family and friends got home safe, but he assisted in cleaning up, 
                  as well as just being very hospitable to our guests. Highly recommend YourDriver. Best ride service 
                  we’ve ever had.” 
                </p>
                <div className="customer-review-card-below">
                  <h3>Adams Smith</h3>
                  <span>HR Personel</span>
                </div>
              </div>

              <div className="customer-reiview-card">
                <img className='customer-img' src={passenger3} alt="" />
                <img className='customer-icon' src={customer_sat} alt="" />
                <p>“We used Your Driver for our wedding day. Not only did they pickup the bride and drive her to
                  the ceremony. They did an awesome job at getting our 40 guests and their cars home safely after
                  the reception. Cant say enough good things on how professional they were. 6 Stars!”
                </p>
                <div className="customer-review-card-below">
                  <h3>Adams Smith</h3>
                  <span>HR Personel</span>
                </div>
              </div>


            </div>

            <div className="customer-review-main2">
              <div className="customer-reiview-card">
                <img className='customer-img' src={passenger4} alt="" />
                <img className='customer-icon' src={customer_sat} alt="" />
                <p>“Dan and Terry are awesome. Every time I’ve used this service it’s been top notch. I would much 
                  rather use this service over a cab...the cost of your driver is about the same as a taxi, and you 
                  get your car home safe!”
                </p>
                <div className="customer-review-card-below">
                  <h3>Adams Smith</h3>
                  <span>HR Personel</span>
                </div>
              </div>
              <div className="customer-reiview-card">
                <img className='customer-img' src={passenger5} alt="" />
                <img className='customer-icon' src={customer_sat} alt="" />
                <p>“We used Your Driver for our wedding day. Not only did they pickup the bride and drive her to
                  the ceremony. They did an awesome job at getting our 40 guests and their cars home safely after
                  the reception. Cant say enough good things on how professional they were. 6 Stars!”
                </p>
                <div className="customer-review-card-below">
                  <h3>Adams Smith</h3>
                  <span>HR Personel</span>
                </div>
              </div>
              <div className="customer-reiview-card">
                <img className='customer-img' src={passenger6} alt="" />
                <img className='customer-icon' src={customer_sat} alt="" />
                <p>“We used Your Driver for our wedding day. Not only did they pickup the bride and drive her to
                  the ceremony. They did an awesome job at getting our 40 guests and their cars home safely after
                  the reception. Cant say enough good things on how professional they were. 6 Stars!”
                </p>
                <div className="customer-review-card-below">
                  <h3>Adams Smith</h3>
                  <span>HR Personel</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About