import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import isEmpty from 'lodash.isempty';
import { useSpring, animated } from 'react-spring';
import FlyoutMenu from '../FlyoutMenu/FlyoutMenu';
import config from '../../config';
import NomsContext from '../../NomsContext';
import './Header.css';

const Header = () => {
  const logoAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    // duration: 4000,
  });
  const { user, username } = useContext(NomsContext);
  const { pathname } = useLocation();
  const linkStyles = { textDecoration: 'none', color: 'white' };
  const loginLink = (
    <a
      style={linkStyles}
      href={`${config.API_ENDPOINT}/auth/google-oauth`}
      className="login-btn google-oauth-btn"
    >
      Login with Google
    </a>
  );

  const logoutLink = (
    <a style={linkStyles} href={`${config.API_ENDPOINT}/auth/logout`}>
      Logout
    </a>
  );

  const loginLinks = user.id ? logoutLink : loginLink;

  return (
    <header className="header">
      <div className="header-top">
        <div className="brand">
          <animated.div style={logoAnimation}>
            <div className="logo">
              <FlyoutMenu />
            </div>
          </animated.div>
          <Link to="/" style={{ textDecoration: 'none', height: '100%' }}>
            <h1>NomsPDX</h1>
          </Link>
        </div>
        <span className="header-top__greeting">
          {!isEmpty(user) && `Hi ${username}`}
        </span>
      </div>
      <div className="header-bottom">
        <nav>
          <ul className="nav__links ul-reset roboto">
            <li
              className={
                pathname === '/' ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              <Link to="/" style={linkStyles}>
                Home
              </Link>
            </li>
            <li
              className={
                pathname === '/about'
                  ? 'nav__link nav__link--active'
                  : 'nav__link'
              }
            >
              <Link to="/about" style={linkStyles}>
                About
              </Link>
            </li>
            {!isEmpty(user) && (
              <li
                className={
                  pathname === '/profile'
                    ? 'nav__link nav__link--active'
                    : 'nav__link'
                }
              >
                <Link to="/profile" style={linkStyles}>
                  Profile
                </Link>
              </li>
            )}
            <li className="nav__link">{loginLinks}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
