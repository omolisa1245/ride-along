import React, {useState} from 'react'
import Navbar from '../src/component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Vehicles from './Pages/Vehicles/Vehicles'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Order from './Pages/Order/Order'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
import './App.css'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
  
      <div>
        
        <Navbar setShowLogin={setShowLogin} />
        <div className="logon">
            {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Vehicles' element={<Vehicles />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Order' element={<Order />} />
        </Routes>
        <Footer />

      </div>
    </>
  )
}

export default App