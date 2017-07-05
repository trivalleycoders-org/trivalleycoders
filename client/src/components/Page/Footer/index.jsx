import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './style.css';

const Footer = () => (
  <footer id='footer' className='gradient-black-background'>
    <div className='section-container container-fluid footer-container'>
      <div className="fa-btns">
        <a href="https://github.com/trivalleycoders-org">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.meetup.com/trivalleycoders//">
          <i className="fa fa-meetup fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/groups/free.code.camp.sanramon/">
          <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <p>&copy; 2017 Tri-Valley Coders. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
