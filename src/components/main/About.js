import React from 'react';
import { Container, Jumbotron, } from 'react-bootstrap';
import styled from 'styled-components';
import pattern from '../../assets/images/pattern.jpg';

const StyledJumbotron = styled(Jumbotron) `
    background-image: url(${pattern});
    height: 25rem;
`;

const About = () => {
  
  return (
    <>
      <StyledJumbotron />
      <Container>
        <h1>Pooja and her Bollywood Dance Academy.</h1>

        <p> Pooja's Bollywood Dance Academy has existed since 2009 and is situated in Malmö. The academy offers many different dance courses for all age groups. The students consist of a mixed group with different levels of ambitions, from beginners to professionals.  To learn more about the classes, click here. </p>

        <p>Pooja was born in India's cultural capital Mumbai (earlier Bombay). Her mother is a former teacher in classical Indian dance and acted in a few Bollywood films in her younger years. At a very early age, Pooja was introduced to classical Indian dance forms, including Bharatnatyam and Kathak. At the age of 15, Pooja was honoured the award for "Best Dancer" at Shiamak Davar's Summer Funk of 1994 held in Mumbai.</p>

        <p>By 17, Pooja had worked with the world-famous choreographer and film director Farah Khan for the Bollywood film "Kartoos". She also had the oppurtunity to work with Saroj Khan, who is known for her choreography in over 250 films, including "Devdas". Before coming to Sweden, Pooja was working with MTV India for the past 10 years, and has choreographed films, advertisements and dance shows worldwide. In 2004, she even experimented with production, when she co-produced the indo-islandic documentary "Proximitas".</p> 

        <p>Marriage brought her to Sweden in 2007, where she lives with her husband. Pooja offers regular Bollywood Dance classes in Malmö, and workshops all over Europe. In 2012, she introduced Bhangra to Malmö.</p>
      </Container>

    </>
  );
}
    
  export default About;