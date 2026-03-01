import React from 'react'
import './Promo.css'
import img_18 from '../../assets/img_18.png'

const Promo = () => {
    return (
        <div className='promo-container'>
            <div className="promo-holder">
                <div className="promo-contain">
                    <div className="promo-text">
                        <h4>up for grab</h4>
                        <span>30% discount off all Sunday ride</span>
                        <p>book a ride with us every first sunday of the month and get a chance to receive 30% redudction from your charge</p>
                    </div>
                </div>
                  <div className="promo-image">
                        <img src={img_18}alt="" />

                    </div>
            </div>
        </div>
    )
}

export default Promo