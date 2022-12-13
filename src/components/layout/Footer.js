import React from 'react';
import styled from 'styled-components';
import cheers from '../../assets/images/cheers.jpg'
import { FaFacebook, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const StyledFooter = styled.div`
    background-image: url(${cheers});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10rem;
    height: 24rem;
    

    @media (max-width: 768px) {
    height: 40rem;
  }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <h1 style={{ margin: "1rem", color: "white", textAlign: "center", paddingTop: "2rem" }}>Contact</h1>
            <div id="footer-info">
                <div className="circle">
                    <FaFacebook className="footer-icon" />
                    <span className="footer-contact">
                        <a href="https://dance-app-9c409.web.app/">Join group</a>
                    </span>
                </div>

                <div className="circle">
                    <FaInstagram className="footer-icon" />
                    <span className="footer-contact">
                        <a href="https://dance-app-9c409.web.app/">Ballet Showgroup</a>
                    </span>
                </div>
                <div className="circle">
                    <IoIosMail className="footer-icon" />
                    <span className="footer-contact">
                        <a href="https://dance-app-9c409.web.app/">info@dansballet.se</a>
                    </span>
                </div>
                <div className="circle">
                    <FaPhoneAlt className="footer-icon" />
                    <span className="footer-contact">
                        <a href="https://dance-app-9c409.web.app/">0099889</a>
                    </span>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;