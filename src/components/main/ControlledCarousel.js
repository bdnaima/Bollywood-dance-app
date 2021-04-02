import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import classical from '../../assets/images/classical.jpeg';
import jump from '../../assets/images/jump.jpeg';
import swirl from '../../assets/images/swirl.jpeg';

const ControlledCarousel = () => {
  
    return (
      <Carousel>
        <Carousel.Item interval={5000}>
          <Carousel.Caption>
            <h3 className="start-height">Add color to your life</h3>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src={ swirl }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <Carousel.Caption>
              <h3 className="start-height">Express yourself to the fullest</h3>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src={ jump }
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3 id="classical-height">Live fearlessly</h3>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src={ classical }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default ControlledCarousel;