import React from 'react'
import { CardGroup, Card } from 'react-bootstrap';
import styled from 'styled-components';
import anoli from '../../assets/images/anoli.jpg';
import party from '../../assets/images/party.jpg';
import kids from '../../assets/images/kids.jpg';

const StyledCard = styled(Card)`
  max-width: 18em;
`;

const StyledCardGroup = styled(CardGroup)`
  background-color: lightgray;
  margin-top: 5em;
  justify-content: space-around;
`;

const Classes = () => {
  return (
    <>
    {/* Banner */}
        {/* <div 
          alt="bollywood girls dancing" 
          style={{
            width: '100vw',
            minHeight: '80vh',
            backgroundImage: `url("${bollywoodvideo2}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        /> */}


      {/* Card section */}
      <div style={{backgroundColor:"lightGrey"}}>
        <StyledCardGroup>
          <StyledCard>
            <Card.Img variant="top" src={ anoli } />
            <Card.Body>
              <Card.Title>Beginner</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </StyledCard>

          <StyledCard>
            <Card.Img variant="top" src={ party } />
            <Card.Body>
              <Card.Title>Advanced</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard>
            <Card.Img variant="top" src={ kids }/>
            <Card.Body>
              <Card.Title>Showgroup</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </StyledCardGroup>
      </div>
    </>
    
  );
}
  
export default Classes;