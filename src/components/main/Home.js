import React from 'react'
import { CardGroup, Card } from 'react-bootstrap';
import ControlledCarousel from './ControlledCarousel'
import styled from 'styled-components';
import anoli from '../../assets/images/anoli.jpg';
import party from '../../assets/images/party.jpg';
import kids from '../../assets/images/kids.jpg';
import media from '../../assets/images/media.jpg';
import yoga from '../../assets/images/yoga.jpg';

const StyledCard = styled(Card)`
  max-width: 18rem;
  margin: 0.5rem;
  opacity: 0.8;

  &:hover {
        opacity: 0.5;
    }
`;

const StyledCardGroup = styled(CardGroup)`
  margin: 2rem;
  justify-content: space-around;
`;

const Home = () => {
  return (
    <>
      <ControlledCarousel />

      {/*Card section */}
      <div>
        <StyledCardGroup>
          <StyledCard>
            <Card.Img variant="top" src={ anoli } />
            <Card.Body>
              <Card.Title>Dance Classes</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </StyledCard>

          <StyledCard>
            <Card.Img variant="top" src={ party } />
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <Card.Img variant="top" src={ kids }/>
            <Card.Body>
              <Card.Title>Kids Bollywood</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </StyledCardGroup>

        {/* Content's second section */}
        <StyledCardGroup>
          <StyledCard>
            <Card.Img variant="top" src={ media } />
            <Card.Body>
              <Card.Title>Media</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <Card.Img variant="top" src={ yoga }/>
            <Card.Body>
              <Card.Title>Yoga</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <Card.Img variant="top" src={ yoga }/>
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </StyledCardGroup>
      </div>
    </>
    
  );
}
  
export default Home;