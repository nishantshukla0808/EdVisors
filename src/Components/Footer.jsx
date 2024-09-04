import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import logo from '../assets/eduvisors-logo.png'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Logo and About Us Section */}
          <div className="col-md-4 mb-4">
          <a href="/" className="text-decoration-none text-white d-flex align-items-center">
    <img 
      src={logo} 
      alt="EduVisors Logo" 
      style={{ width: '300px', height: '80px', marginRight: '10px', marginBottom: '20px'}} 
    />
    <h4 className="mb-3"></h4>

  </a>
            <p style={{textAlign: 'justify'}}>
              EduVisors is dedicated to helping students find their career paths with personalized guidance from
              experienced counsellors. We aim to provide actionable career insights, exclusive resources, and a network
              of professionals to guide you through every step of your journey.
            </p>
          </div>

          {/* Social Media and Contact Section */}
          <div className="col-md-4 mb-4 text-center">
            <h5 className="mb-3">Social | Partners | Career</h5>
            <div className="d-flex justify-content-center mb-3">
              <a href="#" className="text-white mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
            <p>
              <FaMapMarkerAlt className="me-2" />
              1234 Street Name, City, Country
            </p>
            <p>
              <FaEnvelope className="me-2" />
              contact@eduvisors.com
            </p>
            <p>
              <FaPhone className="me-2" />
              +123 456 7890
            </p>
          </div>

          {/* Feedback Form Section */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Feedback Form</h5>
            <form>
              {/* Phone Input with Country Code and Flag */}
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile No.
                </label>
                <PhoneInput
                  country={'us'}
                  inputStyle={{ width: '100%' }}
                  buttonStyle={{ border: 'none' }}
                  dropdownStyle={{ color: 'black' }} // Country names in black
                  enableSearch
                  preferredCountries={['us', 'in', 'gb']}
                  enableAreaCodes
                  disableCountryCode={false}
                  disableDropdown={false}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="query" className="form-label">
                  Query
                </label>
                <textarea className="form-control" id="query" rows="3" placeholder="Enter your query"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-3 border-top mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} EduVisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
