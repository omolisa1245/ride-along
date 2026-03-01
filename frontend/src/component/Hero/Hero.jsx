import React from 'react'
import './Hero.css'
import img_17 from '../../assets/img_17.png'
import logo from '../../assets/logo.png'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <div className="hero-holder">
          <div className="hero-overlay">
          </div>
        </div>
        <div className="hero-detail-content">
          <img className='hero-image' src={img_17} alt="" />
          <div className="hero-details">
            <div className="hero-detail-text">
              <span>We offer the best,</span>
              <h3>& affordable cab services in Nigeria</h3>
              <p>Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets
                us out of bed each morning. It pushes us to constantly reimagine how we can move better.
                For you. For all the places you want to go. For all the things you want to get.
                Ridealong gat you covered.
              </p>

            </div>
            <div className="hero-detail-button">
              <button className='button-2' >Learn more</button>
              <button className='button-3' >Get a cab</button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Hero