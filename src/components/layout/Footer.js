import React from 'react';
import styled from 'styled-components';
import cheers from '../../assets/images/cheers.jpg'
import { Link } from 'react-router-dom';
import { FaFacebook, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const StyledFooter = styled.div`
    background-image: url(${cheers});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10em;
    height: 25rem;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div id="footer-info">
                <div className="circle">
                    <FaFacebook className="footer-icon" />
                    <span className="footer-contact">
                        <a href="https://www.facebook.com/groups/135916699759388">Join group</a>
                    </span>
                </div>

                <div className="circle">
                    <FaInstagram className="footer-icon" />
                    <span className="footer-contact">
                        <a href="https://www.instagram.com/bollywoodshowgirls/?hl=en">Bollywood Showgirls</a>
                    </span>
                </div>
                <div className="circle">
                    <IoIosMail className="footer-icon" />
                    <span className="footer-contact">
                        <a href="mailto:info@dansbollywood.se">info@dansbollywood.se</a>
                    </span>
                </div>
                <div className="circle">
                    <FaPhoneAlt className="footer-icon" />
                    <span className="footer-contact">
                        <a href="tel:0763499350">0763499350</a>
                    </span>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;