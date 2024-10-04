import React from 'react';
import '../css/Footer.css';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='websitesIcons'>
                {/* LinkedIn */}
                <a className="icon-link" href="https://www.linkedin.com/in/fernando-navajas-moraes-2aa4562b6/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                {/* Facebook */}
                <a className="icon-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                {/* Instagram */}
                <a className="icon-link" href="https://www.instagram.com/fer.nmoraes/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                {/* Email */}
                <a className="icon-link" href="mailto:fernandonm07@hotmail.com">
                    <MdEmail size={30} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
