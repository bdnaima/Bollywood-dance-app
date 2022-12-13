import React from 'react';
import { Container, Jumbotron, } from 'react-bootstrap';
import styled from 'styled-components';
import purple from '../../assets/images/purple.jpg';

const StyledJumbotron = styled(Jumbotron)`
    background-image: url(${purple});
    background-repeat: no-repeat;
    background-size: cover;
    height: 24rem;

    @media (max-width: 768px) {
      height: 10rem;
  }
`;

const About = () => {

  return (
    <>
      <StyledJumbotron />
      <Container>
        <h1>Dance Ballet Academy</h1>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros turpis, interdum eu sapien non, mollis sagittis ligula. Proin commodo vestibulum tellus egestas elementum. Nam vel odio sed felis molestie aliquam nec et massa. Nunc cursus placerat ornare. Cras luctus, nibh vitae dictum finibus, ex nisl egestas quam, ut consequat odio quam ullamcorper urna. </p>

        <p>Ut a pellentesque libero. Integer luctus ultricies metus et tincidunt. Maecenas vel congue leo, sit amet aliquet magna. Praesent eget lorem vel eros convallis finibus sollicitudin et ipsum. Nam suscipit eleifend sapien, non luctus libero dictum in. Morbi laoreet leo nec dolor tempus faucibus. Maecenas tristique sem maximus, aliquam est quis, eleifend nunc. Donec aliquam, lorem quis euismod consectetur, nunc nunc tristique risus, id venenatis sem mi vel lorem.</p>

        <p>Ut a pellentesque libero. Integer luctus ultricies metus et tincidunt. Maecenas vel congue leo, sit amet aliquet magna. Praesent eget lorem vel eros convallis finibus sollicitudin et ipsum. Nam suscipit eleifend sapien, non luctus libero dictum in. Morbi laoreet leo nec dolor tempus faucibus. Maecenas tristique sem maximus, aliquam est quis, eleifend nunc. Donec aliquam, lorem quis euismod consectetur, nunc nunc tristique risus, id venenatis sem mi vel lorem.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros turpis, interdum eu sapien non, mollis sagittis ligula. Proin commodo vestibulum tellus egestas elementum. Nam vel odio sed felis molestie aliquam nec et massa. Nunc cursus placerat ornare. Cras luctus, nibh vitae dictum finibus, ex nisl egestas quam, ut consequat odio quam ullamcorper urna.</p>
      </Container>

    </>
  );
}

export default About;