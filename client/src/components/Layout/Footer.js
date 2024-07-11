import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
  return (
    <> 
      <div>
        <div className="bottom">

          <div className="col">
            <h1>Our Services </h1>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/policy">Privacy Policy </Link></li>
            </ul>
          </div>
          <div className="col">
            <h1>Online Shop</h1>
            <ul>
              <li>Watch</li>
              <li>Bag</li>
              <li>Shoes</li>
              <li>Dress</li>
            </ul>
          </div>
          <div className="col ">
            <h1>Connect Us </h1>
            <div className="main-social">
              <Link className="connect" to="https://www.linkedin.com/in/rohan-kumar-1656b923b/"><i class="fab fa-linkedin-in"></i></Link>
              <Link className="connect" to="https://github.com/Rohank1442"><i class="fab fa-github"></i></Link>
            </div>
          </div>
        </div>
        <div class="down">
          <p class="sort">All rights reserved &copy; copyright</p>
          <p class="sort"> Created by Rohan</p>
        </div>
      </div>
    </>
  )
}

export default Footer



