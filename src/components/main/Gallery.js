import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import styled from 'styled-components';
import dance1 from '../../assets/images/dance1.jpeg';
import dance2 from '../../assets/images/dance2.jpeg';
import dance3 from '../../assets/images/dance3.jpeg';
import dance4 from '../../assets/images/dance4.jpeg';
import dance5 from '../../assets/images/dance5.jpeg';
import dance6 from '../../assets/images/dance6.jpeg';
import redDress from '../../assets/images/redDress.jpeg';
import danceGroup from '../../assets/images/danceGroup.jpeg';
import odissi from '../../assets/images/odissi.jpeg';

const StyledCardGroup = styled(CardGroup)`
  margin-left: 2rem;
`;

const StyledCard = styled(Card)`
  min-width: 10rem;
  margin: 4rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const Gallery = () => {
  return (
    <>
      {/* Card section */}
      <StyledCardGroup>
        <StyledCard>
          <Card.Img variant="top" src={dance1} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={dance2} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={dance3} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={dance4} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={dance5} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={dance6} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={redDress} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={danceGroup} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={odissi} />
        </StyledCard>
      </StyledCardGroup>
    </>

  );
}

export default Gallery;