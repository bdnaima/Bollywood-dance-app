import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import styled from 'styled-components';
import YoutubeEmbed from "./YoutubeEmbed";
import danceVideo from '../../assets/images/videoplayback.mp4'

const StyledCardGroup = styled(CardGroup)`
  margin-left: 2rem;
`;

const StyledCard = styled(Card)`
  min-width: 18rem;
  margin: 4rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const Media = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '20rem',
          marginTop: "2rem"
        }}
      >
        <source src={danceVideo} type="video/mp4" />
      </video>

      {/* Card section */}
      <StyledCardGroup>
        <StyledCard className="styledCard-margin" style={{ marginLeft: "0.2rem" }}>
          <YoutubeEmbed embedId="3KHy-tSOVRA" />
        </StyledCard>

        <StyledCard>
          <YoutubeEmbed embedId="Oc2UPtPgfQ8" />
        </StyledCard>

        <StyledCard>
          <YoutubeEmbed embedId="BpqgFyEdFMs" />
        </StyledCard>

        <StyledCard>
          <YoutubeEmbed embedId="tWuWTWwkMEo" />
        </StyledCard>

        <StyledCard>
          <YoutubeEmbed embedId="tUAbzwLN5ro" />
        </StyledCard>

        <StyledCard>
          <YoutubeEmbed embedId="5cRHt3AaUuU" />
        </StyledCard>
      </StyledCardGroup>
    </>

  );
}

export default Media;