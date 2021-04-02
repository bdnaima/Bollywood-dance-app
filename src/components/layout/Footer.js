import React from 'react';
import styled from 'styled-components';
import cheers from '../../assets/images/cheers.jpg'

const StyledFooter = styled.div `
    background-image: url(${cheers});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10em;
    height: 25rem;
    opacity: 0.5;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div>
            
            </div>
        </StyledFooter>
    )
}

export default Footer;