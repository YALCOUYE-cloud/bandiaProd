import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../header/logo.jpg'
import './Header.css'

function Header() {
        return (
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                <img src={logo} alt="Logo" className="navbar-logo-img" />
              </Link>
              <ul className="navbar-menu">
                <li className="navbar-item">
                  <Link to="/" className="navbar-link">
                    Bandiaprod
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/services" className="navbar-link">
                    Services
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="navbar-link">
                    Films
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="navbar-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        );
      }
      

export default Header