import React from 'react'
import './Blog.css'
import { useNavigate } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import services_image2 from '../../assets/services_image2.webp'
import blog_image1 from '../../assets/blog_image1.jpg'
import blog_image2 from '../../assets/blog_image2.webp'
import blog_image3 from '../../assets/blog_image3.jpg'
import blog_image4 from '../../assets/blog_image4.jpg'
import blog_image5 from '../../assets/blog_image5.jpg'
import blog_image6 from '../../assets/blog_image6.jpg'
import blog_image7 from '../../assets/blog_image7.jpg'
import down2 from '../../assets/down2.jpg'
import down3 from '../../assets/down3.jpg'
import down4 from '../../assets/down4.png'
import down6 from '../../assets/down6.avif'
import down5 from '../../assets/down5.webp'
import down1 from '../../assets/down1.png'
import { FaLongArrowAltRight } from "react-icons/fa";





const Blog = () => {


  const navigate = useNavigate();

  return (
    <div>
      <div className="blog-container">

        <div className="blog-header">
          <div className="blog-header-overlay">

            <div className="design-cont">
              <div className="design-left">
                <div className="design1"></div>
                <div className="design2"></div>
              </div>
              <div className="design3"></div>
            </div>

            <div className="blog-header-content">
              <h1>Blog</h1>
              <div className="blog-header-content-below">
                <IoHomeOutline className='blog-header-svg' />
                <span onClick={() => navigate('/')} >Home</span>
                <IoIosArrowForward className='blog-header-svg' />
                <p>Blog</p>
              </div>
            </div>
          </div>

        </div>

        <div className="blog-body1-holder">
          <div className="blog-body1-left">
            <img src={blog_image1} alt="" />
            <div className="blog-body1-date">
              <span>23rd, July 2025</span>
              <hr className='span1' />
              <span>306 comment</span>
              <hr className='span1' />
              <span>1029 likes</span>

            </div>
            <h1>How to Get Discount With Our Mobile Application</h1>
            <p>when you ride with us, you can pay less with executive packages.
              Promotions are easy ways to pay less. In the rider app, you can stay informed about
              what promotions are available to you.Get started
            </p>
            <button>Read more</button>

            <div className="blog-body1-left2">
              <img src={blog_image7} alt="" />
              <div className="blog-body1-date">
                <span>2, August 2025</span>
                <hr className='span1' />
                <span>264 comment</span>
                <hr className='span1' />
                <span>3409 likes</span>

              </div>
              <h1>The impact of RidAlong in the society</h1>
              <p>By offering a convenient alternative to every purpose a private car serves,
                RideAlong shared mobility platform can help reduce the number of trips made by private cars.
                This will ultimately lead to better cities with less traffic congestion, pollution, and land
                taken up by parking spaces.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <div className="blog-body1-right">
            <h3>Search</h3>
            <hr className='h3-line' />
            <div className="input">
              <button></button>
              <input type="text" placeholder='search here' />
              <FaLongArrowAltRight className='input-arrow' />
            </div>

            <h3>Categories</h3>
            <hr className='h3-line' />

            <div className="categories-container">

              <div className="categories">
                <IoIosArrowForward />
                <span>City life</span>
              </div>
              <div className="categories">
                <IoIosArrowForward />
                <span>VIP cab</span>
              </div>
              <div className="categories">
                <IoIosArrowForward />
                <span>Passengers</span>
              </div>

              <div className="categories">
                <IoIosArrowForward />
                <span>City life</span>
              </div>
              <div className="categories">
                <IoIosArrowForward />
                <span>Traffic</span>
              </div>
            </div>

            <div className="recent-post">
              <h3>Recent Post</h3>
              <hr className='h3-line' />
            </div>

            <div className="recent-post-below">
              <div className="recent-post-below-cont">
                <img src={blog_image6} alt="" />
                <div className="recent-post-below-content">
                  <h3>How to Get Discount With Our Mobile Application</h3>
                  <span>14, August 2025</span>
                </div>
              </div>
              <div className="recent-post-below-cont">
                <img src={blog_image3} alt="" />
                <div className="recent-post-below-content">
                  <h3>How Taxi App Solution Benefit both Drivers and riders</h3>
                  <span>14, August 2025</span>
                </div>
              </div>
              <div className="recent-post-below-cont">
                <img src={blog_image4} alt="" />
                <div className="recent-post-below-content">
                  <h3>Top 5 Apps To Book Taxi From Your Device</h3>
                  <span>9, july 2025</span>
                </div>
              </div>
              <div className="recent-post-below-cont">
                <img src={blog_image2} alt="" />
                <div className="recent-post-below-content">
                  <h3>How to use our services to place orders</h3>
                  <span>4, September 2025</span>
                </div>
              </div>
              <div className="recent-post-below-cont">
                <img src={blog_image5} alt="" />
                <div className="recent-post-below-content">
                  <h3>How to get promo code to win grand prices</h3>
                  <span>23, June 2025</span>
                </div>
              </div>
            </div>
            <div className="categories-below">
              <h2>Blog Categories</h2>
              <hr className='cat-line' />
              <span>News (23)</span>
              <span>Regular (13)</span>
              <span>Standard (27)</span>
              <span>Executive (306)</span>
              <span>VIP (68)</span>
            </div>
          </div>
        </div>

        <div className="blog-down">
          <div className="blog-down-cont">
            <img src={down1} alt="" />
            <div className="blog-down-cont-details">
              <h2>A Guide to Exploring the City with Our cab Services</h2>
              <span>Do you want to explore the city or you have an engagement with the city RideAlong has
                the best experience and car that will make you the best experience
              </span>
              <div className="blog-down-cont-button">
                <p>Read more</p>
                <FaLongArrowAltRight className='read-more-arrow'/>

              </div>
            </div>
          </div>
          <div className="blog-down-cont">
            <img src={down2} alt="" />
            <div className="blog-down-cont-details">
              <h2>Choosing the Right Car for Your Road Trip</h2>
              <span>Do you want to explore the city or you have an engagement within the city RideAlong has
                the best car to suit your comfortability.
              </span>
              <div className="blog-down-cont-button">
                <p>Read more</p>
                <FaLongArrowAltRight className='read-more-arrow'/>

              </div>
            </div>
          </div>
          <div className="blog-down-cont">
            <img src={down3} alt="" />
            <div className="blog-down-cont-details">
              <h2>How Our Airport Taxi Services Make Travel Easier</h2>
              <span>You dont want to miss your flight, you want to to be comfortable on your trip, 
                we have what it take takes to get youmto the airport safe and sound
              </span>
              <div className="blog-down-cont-button">
                <p>Read more</p>
                <FaLongArrowAltRight className='read-more-arrow'/>

              </div>
            </div>
          </div>
          <div className="blog-down-cont">
            <img src={down4} alt="" />
            <div className="blog-down-cont-details">
              <h2>A Guide to Exploring the City with Our cab Services</h2>
              <span>Do you want to explore the city or you have an engagement with the city RideAlong has
                the best experience and car that will make you the best experience
              </span>
              <div className="blog-down-cont-button">
                <p>Read more</p>
                <FaLongArrowAltRight className='read-more-arrow'/>

              </div>
            </div>
          </div>
          <div className="blog-down-cont">
            <img src={down5} alt="" />
            <div className="blog-down-cont-details">
              <h2>A Guide to Exploring the City with Our cab Services</h2>
              <span>Do you want to explore the city or you have an engagement with the city RideAlong has
                the best experience and car that will make you the best experience
              </span>
              <div className="blog-down-cont-button">
                <p>Read more</p>
                <FaLongArrowAltRight className='read-more-arrow'/>

              </div>
            </div>
          </div>
          <div className="blog-down-cont">
            <img src={down6} alt="" />
            <div className="blog-down-cont-details">
              <h2>A Guide to Exploring the City with Our cab Services</h2>
              <span>Do you want to explore the city or you have an engagement with the city RideAlong has
                the best experience and car that will make you the best experience
              </span>
              <div className="blog-down-cont-button">
                <p>Read more</p>
                <FaLongArrowAltRight className='read-more-arrow'/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog