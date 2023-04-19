import React from 'react';
import { Carousel } from 'react-bootstrap';
import ballerina from '../../assets/images/ballerina-dance.jpg';
import ballet from '../../assets/images/ballet-dance.jpg';
import balletPose from '../../assets/images/ballet-pose.jpg';

const ControlledCarousel = () => {

  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <Carousel.Caption>
          <h3>Add color to your life</h3>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={ballerina}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Carousel.Caption>
          <h3>Express yourself to the fullest</h3>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={balletPose}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3 id="classical-height">Dance fearlessly</h3>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={ballet}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;