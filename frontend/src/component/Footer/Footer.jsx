import React from 'react'
import './Footer.css'
import start_car from '../../assets/start_car.webp'
import start_slow from '../../assets/start_slow.jpeg'
import logo from '../../assets/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="footer-container">
                <div className="footer-holder2"><img src={logo} alt="" /></div>
                <div className="footer-holder">
                    <div className="footer-content">
                        <div className="footer-content-up">
                            <hr className='line-f' />
                            <div className="footer-content-up2">
                                <h3>News Subscribtion</h3>
                                <span>GET THE LATTEST NEW FROM RIDEALONG INFO CENTER</span>
                            </div>
                        </div>
                        <div className="footer-button">
                            <input type="text" placeholder='Email address' /><button>SUBSCRIBE</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-main-main">
                <div className="footer-main-container">
                    <div className="footer-main-holder">
                        <div className="footer-main1">
                            <div className="footer-main1-content">
                                <h3>ABOUT COMPANY</h3>
                                <hr className='about-line' />
                                <p>Ride-hailing helps to reduce private car usage in cities by providing a shared version
                                    of a transport option that citizens are already familiar with.This mode helps bridge gaps
                                    in public transit.
                                </p>
                                <h5>WE ARE AVAILABLE</h5>
                                <span>Mon - Sat : 9am to 5pm</span>
                            </div>
                            <div className="footer-main1-social">
                                <FaInstagram className='icon-social-foot' />
                                < FaSquareFacebook className='icon-social-foot' />
                                <FaSquareXTwitter className='icon-social-foot' />
                                <FaWhatsapp className='icon-social-foot' />
                                <FaLinkedin className='icon-social-foot' />

                            </div>
                        </div>

                        <div className="footer-main2">

                            <h3>QUICK LINK</h3>
                            <hr className='quick-line' />
                            <ul>
                                <li><FaArrowRight />About us</li>
                                <li><FaArrowRight />Book Ride</li>
                                <li><FaArrowRight />Client Feedback</li>
                                <li><FaArrowRight />Our Services</li>
                                <li><FaArrowRight />Our Drivers</li>
                                <li><FaArrowRight />Contact us</li>
                            </ul>
                        </div>

                        <div className="footer-main3">
                            <h3>RECENT POST</h3>
                            <hr className='recent-line' />
                            <div className="footer-main3-image-cont">
                                <img src={start_car} alt="" />
                                <div className="footer-main-image-cont-text">
                                    <h6>17th, June 2025</h6>
                                    <h3>How to start car engine faster</h3>
                                    <p><span>Read more</span><FaArrowRight /></p>
                                </div>
                            </div>
                            <div className="footer-main3-image-cont">
                                <img src={start_slow} alt="" />
                                <div className="footer-main-image-cont-text">
                                    <h6> 2nd, july 2025</h6>
                                    <h3>How to start car engine slowly</h3>
                                    <p><span>Read more</span><FaArrowRight /></p>

                                </div>
                            </div>
                        </div>
                        <div className="footer-main4">
                            <h3>CONTACT INFO</h3>
                            <hr className='info-line' />
                            <div className="footer-main4-cont">
                                <div className="footer-main4-addr">
                                    <IoHomeOutline className='icon-footer' />
                                    <div className="footer-main4-addr-detail">
                                        <p>Our Address</p>
                                     <span>106, Awoyaya Road, Ibeju-Lekki</span>
                                    </div>
                                </div>
                               

                                <div className="footer-main4-addr">
                                    <MdOutlineEmail className='icon-footer' />
                                    <div className="footer-main4-addr-detail">
                                        <p>Our Address</p>
                                        <span>wwww.ridealong.gmail.com</span>
                                    </div>
                                </div>
                                

                                <div className="footer-main4-addr">
                                    <FaPhoneAlt className='icon-footer' />
                                    <div className="footer-main4-addr-detail">
                                        <p>Our Address</p>
                                        <span>+2349054637365</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-cont">
                            <span>© 2025 Bolt Technology OÜ</span>
                            <div className="footer-bottom-details">
                                <ul>
                                    <li>Suppliers</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy</li>
                                    <li>Cookies</li>
                                    <li>Security</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer