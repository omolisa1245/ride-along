import React from 'react'
import './App.css'
import app_image5 from '../../assets/app_image5.png'
import app_image4 from '../../assets/app_image4.png'
import app_image3 from '../../assets/app_image3.png'

const App = () => {
    return (
        <div className='app-container'>
            <div className="app-holder">
                <div className="app-content">
                    <div className="app-details">
                        <span>DOWNLOAD RIDEALONG APP NOW</span>
                        <h2>Get free Ridealong app on online store</h2>
                        <p>This mode helps bridge gaps in public transit networks and is a viable first-and-last-mile 
                            option to improve connectivity to public transport. It's also often the safest mobility 
                            option for populations that don’t have access to public transport.</p>
                    </div>

                    <div className="app-image">
                        <img className='android' src={app_image4}alt="" />
                        <img className='apple' src={app_image5}alt="" />
                    </div>
                </div>
                <div className="app-mobile">
                     
                    <img src={app_image3} alt="" />
                    <div className="pad-layer"></div>
                </div>
                 
            </div>
        </div>
    )
}

export default App