/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react';
import {
  FaCarSide,
  FaSignInAlt,
  FaBars, FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaVimeo,
  FaPinterest,
} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './Navbar.css';
import { getLocalStorage, setLocalStorage } from '../logics/localStore';
import logo from '../assets/images/car_booking_logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState(!getLocalStorage() ? setLocalStorage({ user_id: '', loggedIn: false }) : getLocalStorage());
  const sidebarData = [
    {
      id: 1, path: '/add_car', title: 'Add Car', icon: <FaCarSide />, cName: 'nav-text',
    },
    {
      id: 2, path: '/delete_cars', title: 'Delete Car', icon: <AiIcons.AiOutlineDeleteColumn />, cName: 'nav-text',
    },
    {
      id: 3, path: '/add_reservations', title: 'Reserve Car', icon: <FaCarSide />, cName: 'nav-text',
    },
    {
      id: 4, path: '/reservations', title: 'Reservations', icon: <IoIcons.IoIosPaper />, cName: 'nav-text',
    },
  ];

  const loggedOutLinks = [
    {
      id: 1, path: '/registeration', title: 'Signup', icon: <FaSignInAlt />, cName: 'nav-text',
    },
    {
      id: 2, path: '/login', title: 'Login', icon: <FaSignInAlt />, cName: 'nav-text',
    },
  ];

  const showSidebar = () => setSidebar(!sidebar);

  const showSignOut = () => {
    showSidebar();
    setLocalStorage({ user_id: '', loggedIn: false });
    navigate('/login');
  };

  useEffect(() => {
    setLoginStatus(getLocalStorage().loggedIn);
  });

  return (
    <>
      <IconContext.Provider value={{ color: '#97bf0f' }}>
        <div className="navbar">
          <NavLink to="/" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </NavLink>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <NavLink to="/" className="menu-bars">
                <AiIcons.AiOutlineClose />
                <img className="nav-logo" src={logo} alt="logo" />
              </NavLink>
            </li>
            <div className={loginStatus ? 'nav-links' : 'nav-links logged-out'}>
              {
                loginStatus
                  ? sidebarData.map((link) => (
                    <li key={link.id} className={link.cName}>
                      <NavLink
                        onClick={showSidebar}
                        key={link.id}
                        to={link.path}
                        className={({ isActive }) => (isActive ? 'single-nav-link-active' : 'single-nav-link')}
                      >
                        {link.icon}
                        {link.title}
                      </NavLink>
                    </li>
                  ))
                  : loggedOutLinks.map((link) => (
                    <li key={link.id} className={link.cName}>
                      <NavLink
                        onClick={showSidebar}
                        key={link.id}
                        to={link.path}
                        className={({ isActive }) => (isActive ? 'signle-nav-link-active' : 'single-nav-link')}
                      >
                        {link.icon}
                        {link.title}
                      </NavLink>
                    </li>
                  ))
              }
            </div>
            {
              loginStatus
                ? <button onClick={showSignOut} className="sign-out-btn" type="button">Sign out</button>
                : ''
            }
            <div className="social-menu">
              <FaTwitter className="social-icons" />
              <FaFacebook className="social-icons" />
              <FaGooglePlus className="social-icons" />
              <FaVimeo className="social-icons" />
              <FaPinterest className="social-icons" />
            </div>
            <div className="copyrights">
              <p>&copy; Final Group Capstone 2022</p>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
