import React, { useState } from 'react'
import './Contact.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios"

const Contact = () => {


  const [token, setToken] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setSubmissionStatus('Submitting...');

    try {
      const response = await axios.post('http://localhost:3000/api/form/info', formData); // Replace with your API endpoint
      setSubmissionStatus('Request submitted successfully!');
      console.log('response:', response.data);
      // Optionally, clear the form or redirect
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmissionStatus('Error submitting request. Please try again.');
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className='contact-container'>

      <div className="contact-header">
        <div className="contact-header-overlay">

          <div className="contact-header-content">
            <h1>Contact</h1>
            <div className="contact-header-content-below">
              <IoHomeOutline className='contact-header-svg' />
              <span onClick={() => navigate('/')} >Home</span>
              <IoIosArrowForward className='contact-header-svg' />
              <p>Contact</p>
            </div>
          </div>



        </div>


      </div>

      <div className="contact-body">
        <div className="contact-body-details">
          <h1>We Are Always Open for You</h1>
          <p>Whether you need a quick ride to the airport, a trip to a business meeting,
            or a night out on the town, our fleet of well-maintained taxis and professional
            drivers are at your service. Our user-friendly website and mobile app make it effortless
            to book a cab. We're available 24/7, so you can rely on us for last-minute
            travel needs.
          </p>
        </div>

        <div className="contact-body-address">
          <div className="contact-call-icon">
            <IoMdCall className='nav-icons' />
            <span>+2349054637365</span>
          </div>
          <div className="contact-call-icon">
            <MdEmail className='nav-icons' />
            <span>wwww.ridealong.gmail.com</span>
          </div>
          <div className="contact-call-icon">
            <FaLocationDot className='nav-icons' />
            <span>106, Awoyaya Road, Ibeju-Lekki</span>
          </div>
        </div>
        <div className="contact-holder">
          <div className="contact-body2">

            <div className="contact-input">
              <h3>HOW CAN WE HELP YOU?</h3>
              <h1>Do You Have a Questions?</h1>
              <p>Our user-friendly website and mobile app make it effortless to book a taxi or car rental.
                We're available 24/7, so you can rely on us for last-minute travel needs.Kindly fill out the form
                for more information. Our ustomer representative will
                reach out to you via email.Thank you for trusting RideAlong
              </p>
            </div>
            <form onSubmit={onSubmitHandler} className='form-tag'>
              <input name='name' onChange={formHandler} value={formData.name} placeholder='Your Name' type="text" className='form-tag-input' required />
              <input name='email' onChange={formHandler} value={formData.email} placeholder='Your Email' type="text" className='form-tag-input' required />
              <input name='subject' onChange={formHandler} value={formData.subject} placeholder='Subject' type="text" className='form-tag-input' required />
              <textarea name="message" onChange={formHandler} value={formData.message} placeholder='Your Message' id="" className='form-tag-input-textarea' required></textarea >

              <button type='submit'>Submit</button>

            </form>

          </div>
        </div>

      </div>

      <div className="google-map">
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.804920834356!2d3.702249776065406!3d6.470596053377883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bff5d1f99b153%3A0x21940ac8f95390d4!2sRoyal%20Bliss%20Event%20Centre!5e0!3m2!1sen!2sng!4v1754871984492!5m2!1sen!2sng"
          width="90%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  )
}

export default Contact