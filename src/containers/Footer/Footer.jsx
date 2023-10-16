import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook, faInstagram, faTiktok 
} from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

const Footer = () => {
  const currentDate = new Date();
  const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);

  return (
      <>
      <div className='footer__brake'></div>
      <footer className='footer p-4'>
          <div className='footer-content'>
              <div className='footer-left'>
                  <p className='font'>&copy; Created by Kakego</p>
                  <p>created: 20/06/2023 - {formattedDate}</p>
              </div>
              <div className='footer-right'>
              <ul className='social-icons'>
                <li>
                    <a 
                    href='https://www.facebook.com/profile.php?id=61552374331657'>
                        <FontAwesomeIcon className='icon' icon={faFacebook} size='lg' />
                    </a>
                </li>
                  <li><a href='#'><FontAwesomeIcon className='icon' icon={faInstagram} size='lg' /></a></li>
                  <li><a href='#'><FontAwesomeIcon className='icon' icon={faTiktok} size='lg' /></a></li>
              </ul>
              </div>
          </div>
      </footer>
      </>
  );
};

export default Footer