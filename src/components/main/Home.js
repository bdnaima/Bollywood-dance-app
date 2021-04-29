import React from 'react'
import { CardGroup, Card, Jumbotron, Container,} from 'react-bootstrap';
import ControlledCarousel from './ControlledCarousel'
import styled from 'styled-components';
import anoli from '../../assets/images/anoli.jpg';
import party from '../../assets/images/party.jpg';
import kids from '../../assets/images/kids.jpeg';
import media from '../../assets/images/media.jpg';
import yoga from '../../assets/images/yoga.jpg';
import bhangra from '../../assets/images/bhangra.jpeg';

const StyledCard = styled(Card)`
  max-width: 18rem;
  margin: 0.5rem;
  transition: 0.5s;
  background-color: rebeccapurple;
  box-shadow: 2px 3px 3px 3px indigo;
  color: white;

  &:hover {
        opacity: 0.5;
    }
`;

const StyledCardGroup = styled(CardGroup)`
  margin: 2rem;
  justify-content: space-around;
  border-radius: 20px;
`;

const Home = () => {
  return (
    <>
      <ControlledCarousel />
      <Jumbotron fluid>
        <Container>
          <h1>For the love of dance!</h1>
          <p>
            Find classes and book anytime.
          </p>
        </Container>
      </Jumbotron>
      {/*Card section */}
      <div>
        <StyledCardGroup>
          <StyledCard>
            <Card.Img variant="top" src={ anoli } />
            <Card.Body>
              <Card.Title>Dance Classes</Card.Title>
            </Card.Body>
          </StyledCard>

          <StyledCard>
            <Card.Img variant="top" src={ party } />
            <Card.Body>
              <Card.Title>Events</Card.Title>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <Card.Img variant="top" src={ kids }/>
            <Card.Body>
              <Card.Title>Kids Bollywood</Card.Title>
            </Card.Body>
          </StyledCard>
        </StyledCardGroup>

        {/* Content's second section */}
        <StyledCardGroup>
          <StyledCard>
            <Card.Img variant="top" src={ media } />
            <Card.Body>
              <Card.Title>Media</Card.Title>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <Card.Img variant="top" src={ yoga }/>
            <Card.Body>
              <Card.Title>Yoga</Card.Title>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <Card.Img variant="top" src={ bhangra }/>
            <Card.Body>
              <Card.Title>About</Card.Title>
            </Card.Body>
          </StyledCard>
        </StyledCardGroup>
      </div>
    </>
    
  );
}
  
export default Home;