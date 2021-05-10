import React from 'react'
import { CardGroup, Card } from 'react-bootstrap';
import styled from 'styled-components';
import anoli from '../../assets/images/anoli.jpg';
import party from '../../assets/images/party.jpg';
import kids from '../../assets/images/kids.jpeg';

const StyledCard = styled(Card)`
  max-width: 18em;
`;

const StyledCardGroup = styled(CardGroup)`
  margin-top: 5em;
  justify-content: space-around;
`;

const Gallery = () => {
  return (
    <>
      {/* Card section */}
      <StyledCardGroup>
        <StyledCard>
          <Card.Img variant="top" src={anoli} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={party} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={kids} />
        </StyledCard>
      </StyledCardGroup>
    </>

  );
}

export default Gallery;