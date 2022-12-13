import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import styled from 'styled-components';
import dance1 from '../../assets/images/dance-gada.jpg';
import dance2 from '../../assets/images/slipper.jpg';
import dance3 from '../../assets/images/bride.jpg';
import dance4 from '../../assets/images/female.jpg';
import dance5 from '../../assets/images/couple.jpg';
import dance6 from '../../assets/images/dance-gada.jpg';
import dance7 from '../../assets/images/slipper.jpg';
import dance8 from '../../assets/images/female.jpg';
import dance9 from '../../assets/images/bride.jpg';

const StyledCardGroup = styled(CardGroup)`
  margin-left: 2rem;
`;

const StyledCard = styled(Card)`
  min-width: 10rem;
  margin: 3.5rem;

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
          <Card.Img variant="top" src={dance7} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={dance8} />
        </StyledCard>

        <StyledCard>
          <Card.Img variant="top" src={dance9} />
        </StyledCard>
      </StyledCardGroup>
    </>

  );
}

export default Gallery;