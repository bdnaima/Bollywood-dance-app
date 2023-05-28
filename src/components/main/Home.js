import React from "react";
import { CardGroup, Card, Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ControlledCarousel from "./ControlledCarousel";
import styled from "styled-components";
import dance from "../../assets/images/dance-purple.jpg";
import dancer from "../../assets/images/dancer.jpg";

const StyledCardGroup = styled(CardGroup)`
  margin: 4rem;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  max-width: 18rem;
  transition: 0.5s;
  background: linear-gradient(
    180.2deg,
    rgb(120, 85, 137) -6.9%,
    rgb(35, 9, 31) 76.7%
  );
  box-shadow: 2px 3px 3px 3px indigo;
  color: white;

  &:hover {
    opacity: 0.5;
  }
`;

const StyledJumbotron = styled.div`
  background-image: url(${dancer});
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;

  @media (max-width: 768px) {
    height: 15rem;
    max-width: 100%;
  }
`;

const Home = () => {
  return (
    <>
      <ControlledCarousel />
      <Jumbotron fluid>
        <Container>
          <h1>For the love of dance!</h1>
          <p>Find a course and book anytime.</p>
        </Container>
      </Jumbotron>
      {/*Card section */}
      <StyledCardGroup>
        <div className="styling-cards">
          <StyledCard style={{ alignSelf: "flex-start" }}>
            <Card.Img variant="top" src={dance} />
            <Card.Body>
              <Card.Title>Dance Classes</Card.Title>
              <Link to="/admin" className="stretched-link" />
            </Card.Body>
          </StyledCard>
          <div className="styling-text">
            <h1>Find classes</h1>
            <p>Select a day in the schedule and book anytime.</p>
          </div>
        </div>

        <div className="styling-cards flip">
          <div className="styling-text">
            <h1>Find events</h1>
            <p>Check out upcoming events. Book your own events.</p>
          </div>
          <StyledCard style={{ alignSelf: "flex-end" }}>
            <Card.Img variant="top" src={dance} />
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Link to="/events" className="stretched-link" />
            </Card.Body>
          </StyledCard>
        </div>

        <div className="styling-cards">
          <StyledCard>
            <Card.Img variant="top" src={dance} />
            <Card.Body>
              <Card.Title>Media</Card.Title>
              <Link to="/media" className="stretched-link" />
            </Card.Body>
          </StyledCard>
          <div className="styling-text">
            <h1>Check out media</h1>
            <p>Watch videos of all the interesting dance shows.</p>
          </div>
        </div>

        <div className="styling-cards flip">
          <div className="styling-text">
            <h1>Gallery</h1>
            <p>Check out our gallery containing colorful pictures.</p>
          </div>
          <StyledCard style={{ alignSelf: "flex-end" }}>
            <Card.Img variant="top" src={dance} />
            <Card.Body>
              <Card.Title>Gallery</Card.Title>
              <Link to="/gallery" className="stretched-link" />
            </Card.Body>
          </StyledCard>
        </div>
      </StyledCardGroup>
      '
      <StyledJumbotron fluid>
        <Container>
          <Link
            to="/about"
            style={{
              fontSize: "3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </Container>
      </StyledJumbotron>
    </>
  );
};

export default Home;
