import './Services.css'
import React from 'react'


const Services = () => {
    return (
        <div className='services-container'>

            <div className="services-holder-details">
                <div className="service-text">
                    <h3>Our Services</h3>
                    <span>Ridealong is built to give you an easy way to manage your ground transportation needs.
                        We’ve partnered with healthcare organizations to provide their members and patients with
                        access to care by offering them flexible ride-scheduling options. </span>
                </div>
                <div className="card-holder">
                    <div className="card">
                        <div className="card-below"></div>
                        <div className="card-content">
                            <div className="card-content-details">
                                <h3>CITY TRANSPORT</h3>
                                <p>We are committed to helping cities around the Nigeria make public transportation more
                                    accessible, equitable, and efficient. That’s our commitment to every person on the planet,
                                    and we’ll do everything in our power to get there.</p>
                                <button>Learn more</button>
                            </div>
                            <div className="card-join"></div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-below-2"></div>
                        <div className="card-content">
                            <div className="card-content-details">
                                <h3>INTER-STATE TRANSPORT</h3>
                                <p>We are committed to helping cities around the Nigeria make public transportation more
                                    accessible, equitable, and efficient. That’s our commitment to every person on the planet,
                                    and we’ll do everything in our power to get there.</p>
                                <button>Learn more</button>
                            </div>
                            <div className="card-join"></div>

                        </div>
                    </div>

                    <div className="card">
                        <div className="card-below-3"></div>
                        <div className="card-content">
                            <div className="card-content-details">
                                <h3>LOGISTICS TRANSPORT</h3>
                                <p>We are committed to helping cities around the Nigeria make public transportation more
                                    accessible, equitable, and efficient. That’s our commitment to every person on the planet,
                                    and we’ll do everything in our power to get there.</p>
                                <button>Learn more</button>
                            </div>
                            <div className="card-join"></div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="service-holder"></div>
        </div>
    )
}

export default Services