import React, { useState } from 'react'
import './Vehicles.css'
import gal1 from '../../assets/gal1.avif'
import { useNavigate } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Categories from '../../component/Categories.js'
import { FaLongArrowAltRight } from "react-icons/fa";



const Vehicles = () => {
  const [filterItems, setFilterItems] = useState(Categories);
  console.log(filterItems);

  const handleFilterClick = (category) => {
    if (category === 'all') {
      setFilterItems(Categories)
    } else {
      const newFilteredList = Categories.filter(items => items.category === category);
      setFilterItems(newFilteredList);


    }

  };
  return (
    <div>
      <div className="vehicle-container">
        <div className="vehicle-header">
          <div className="vehicle-header-overlay">

            <div className="design-cont">
              <div className="design-left">
                <div className="design1"></div>
                <div className="design2"></div>
              </div>
              <div className="design3"></div>
            </div>

            <div className="vehicle-header-content">
              <h1>Vehicle</h1>
              <div className="vehicle-header-content-below">
                <IoHomeOutline className='vehicle-header-svg' />
                <span onClick={() => navigate('/')} >Home</span>
                <IoIosArrowForward className='vehicle-header-svg' />
                <p>Vehicle</p>
              </div>
            </div>
          </div>

        </div>


        <div className="vehicle-topic">

          <h2>Explore our amazing Autos for your trip</h2>
          <p>Over the years as we’ve expanded and developed new consumer-appealing food products,
            Uber Freight has adapted its transportation management technologies to support us in staying
            at the forefront of our industry. Uber Freight consistently rises to our toughest logistics
            challenges and remains flexible to the day-to-day changes in our dynamic schedules.</p>

        </div>

        <div className="vehicle-holder1">
          <div className="vehicle-holder2">

            <h3>Select your Categories</h3>
            <button className='vehicle-btn1' onClick={() => handleFilterClick('all')}> All</button>
            <button className='vehicle-btn2' onClick={() => handleFilterClick('Regular')}>Regular</button>
            <button className='vehicle-btn3' onClick={() => handleFilterClick('Standard')}>Standard</button>
            <button className='vehicle-btn4' onClick={() => handleFilterClick('Executive')}>Executive</button>
            <button className='vehicle-btn5' onClick={() => handleFilterClick('VIP')}>VIP</button>
            <button className='vehicle-btn7' onClick={() => handleFilterClick('bus')}>Bus</button>
            <button className='vehicle-btn8' onClick={() => handleFilterClick('truck')}>Trucks</button>
          </div>


          <div className="car-layer1">
            {filterItems.map((items, index) => {

              const { id, title, price, image, category, description } = items;
              return (
                <div className="car1" key={id}>
                  <img src={image} alt="" />
                  <div className="car1-details">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>price : {price}</span>
                    <button>Book Now</button>
                  </div>
                </div >

              );
            })}


          </div>


        </div>

      </div>
    </div >
  )
}

export default Vehicles