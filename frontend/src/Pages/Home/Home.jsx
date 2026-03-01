import React from 'react'
import './Home.css'
import Hero from '../../component/Hero/Hero'
import Intro from '../../component/Intro/Intro.'
import Available from '../../component/Available/Available'
import Services from '../../component/Services/Services'
import Promo from '../../component/Promo/Promo'
import App from '../../component/App/App'



const Home = () => {
  return (
    <div className='home-cont'>
      <Hero/>
      <Intro/>
      <Services/>
      <Available/>
      <Promo/>
      <App/>
    </div>
  )
}

export default Home