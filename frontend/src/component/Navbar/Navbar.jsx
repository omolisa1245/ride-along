import React, { use } from 'react'
import './Navbar.css'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Categories from '../Categories';
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";

const Navbar = ({ setShowLogin }) => {


    const navigate = useNavigate();
    const [menu, setMenu] = useState("Home")
    const [sticky, setSticky] = useState(false)

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })

    }, []);


    return (
        <div className='Navbar'>
            <div className="nav-container">
                <div className="Nav-head">
                    <span>Welcome to RideAlong cab services</span>



                    <div className="nav-head-right">
                        {localStorage.getItem("token") ?
                            <div className="logout">
                                 <span>Welcome to R.A </span>
                               <IoMdLogOut className='logout-main'  onClick={()=> {localStorage.removeItem("token");window.location.replace('/')}} />
                            </div>
                        : <> <CgProfile />
                        <p onClick={() => setShowLogin(true)} >Customer sign in</p> </> }
                       
                    </div>
                </div>
                <div className="nav-middle">


                    <div className="nav-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-middle-contact">
                        <div className="call-icon">
                            <IoMdCall className='nav-icons' />
                            <span>+2349054637365</span>
                        </div>
                        <div className="call-icon">
                            <MdEmail className='nav-icons' />
                            <span>wwww.ridealong.gmail.com</span>
                        </div>
                        <div className="call-icon">
                            <FaLocationDot className='nav-icons' />
                            <span>106, Awoyaya Road, Ibeju-Lekki</span>
                        </div>
                    </div>
                </div>


            </div>

            <div className={`nav-bottom ${sticky ? 'new-nav' : ''}`}>
                <ul className='nav-link'>
                    <li onClick={() => navigate('/')} > <NavLink to="/" >Home</NavLink></li>
                    <li onClick={() => navigate('/About')} > <NavLink to="/About" >About</NavLink></li>
                    <li onClick={() => navigate('/Blog')} > <NavLink to="/Blog" >Blog</NavLink></li>
                    <li onClick={() => navigate('/Vehicles')} > <NavLink to="/Vehicles" >Vehicles</NavLink></li>
                    <li onClick={() => navigate('/Contact')} > <NavLink to="/Contact" >Contact</NavLink></ li>
                </ul>

                <div className="nav-search-icon">
                    <input type="text" onChange={(event) => setSearchTerm(event.target.value)} />
                    <hr className='line-1' />
                    <IoSearch className='search-icon' />
                    <hr className='line-2' />

                    <MdMenuOpen className='nav-menu-icon' />
                </div>

                <button onClick={() => navigate('/Order')}>Book Now</button>
            </div>


            <div className="show-search">

                {
                    Categories
                        .filter((val) => {
                            if (searchTerm === '') {
                                return '';
                            } else if (val.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return val;
                            }



                        })

                        .map((val) => {
                            return (
                                <div className="car1" key={val.id}>
                                    <img src={val.image} alt="" />
                                    <div className="car1-details">
                                        <h3>{val.title}</h3>
                                        <p>{val.description}</p>
                                        <span>price : {val.price}</span>
                                        <button>Book Now</button>
                                    </div>
                                </div >
                            )


                        })

                }
            </div>
        </div>
    )
}

export default Navbar