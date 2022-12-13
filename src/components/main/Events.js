import React from 'react';
import { Card, CardGroup, Container, Button, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import events from '../../assets/images/events.jpg';
import purple from '../../assets/images/purple.jpg'

const StyledJumbotron = styled(Jumbotron)`
    background-image: url(${purple});
    height: 30rem;
    @media (max-width: 768px) {
    height: 10rem;
  }
`;

const StyledCardGroup = styled(CardGroup)`
    margin-left: 2rem;
`;

const StyledCard = styled(Card)`
    min-width: 14rem;
    margin: 4rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const Events = () => {

    return (
        <>
            <StyledJumbotron />

            <Container>
                <h1>Book Events</h1>
                <p>We can be booked for most types of events, including bachelorette parties, weddings, workshops, christmas dinners, birthday parties, and corporate events. We do regular shows in Denmark as well!</p>

                <StyledCardGroup>
                    <StyledCard style={{ marginLeft: "0.2rem" }}>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Workshops</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Shows</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Graduation parties</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Bachelorette/Bachelor parties</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Wedding</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Holiday events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Business events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>Business events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard>
                        <Card.Img variant="top" src={events} />
                        <Card.Body>
                            <Card.Title>School events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum convallis tellus.
                            </Card.Text>
                            <Button variant="primary">Book</Button>
                        </Card.Body>
                    </StyledCard>
                </StyledCardGroup>
            </Container>
        </>
    );
}

export default Events;