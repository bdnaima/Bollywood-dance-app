import React from 'react'
import { CardGroup, Card } from 'react-bootstrap';
import styled from 'styled-components';
import videoplayback from '../../assets/images/videoplayback.mp4'
import anoli from '../../assets/images/anoli.jpg';
import party from '../../assets/images/party.jpg';
import kids from '../../assets/images/kids.jpg';
import media from '../../assets/images/media.jpg';
import orange from '../../assets/images/orange.jpg';
import yoga from '../../assets/images/yoga.jpg';

const StyledCard = styled(Card)`
  max-width: 18em;
`;

const StyledCardGroup = styled(CardGroup)`
  background-image: url(${orange});
  margin-top: 5em;
  justify-content: space-around;
`;

const Home = () => {
  return (
    <>
    {/* Banner video */}
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

        
          <video 
            autoPlay 
            loop 
            muted
            style={{
              width: '100vw',
              height: '30em',
              position: "sticky",
              top: 0,
              zIndex: -1
            }}
            >
            <source src={videoplayback} type="video/mp4"/>
          </video>

      {/* Card section */}
      <div style={{backgroundImage:`url(${orange})`, marginTop: '5em',}}>
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
          <StyledCard style={{ maxWidth: '40vw' }}>
            <Card.Img variant="top" src={ media } />
            <Card.Body>
              <Card.Title>Media</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </StyledCard>
          <StyledCard style={{ maxWidth: '40vw' }}>
            <Card.Img variant="top" src={ yoga }/>
            <Card.Body>
              <Card.Title>Yoga</Card.Title>
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