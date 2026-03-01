import React from 'react'
import './Intro.css'
import img_8 from '../../assets/img_8.png'

const Intro = () => {
    return (
        <div className='Intro-container'>
            <div className="background-image">
                <div className="intro-header">
                    <div className="intro-details">
                        <h2>Why Ride With Us</h2>
                        <h1>Feel the difference and relaxation with us</h1>
                        <p>When you ride with us, you're never on your own. Behind the scenes, over 500 of our team
                            are working to ensure you get where you're going safely. We call them the R.A
                            Safety Team — and they’re behind all of our safety features and processes.</p>
                        <button>Learn More</button>
                    </div>
                    <img src={img_8} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Intro