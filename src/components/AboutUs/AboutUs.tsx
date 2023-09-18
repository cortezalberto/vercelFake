import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>About Us</h2>
                    <p>
                        We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzObZMqzL6eurjtI54YjzO1SVg71uICXdWf925HZWxVkk-nZgeilMBP7GkpDK5teJMvI&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Feature 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2017-12/scientist.png.jpg?itok=pyBqti8G" />
                        <Card.Body>
                            <Card.Title>Feature 2</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/Pictures/web/x/x/v/female_scientist_at_work_160114.jpg?itok=KdvMEVFV" />
                        <Card.Body>
                            <Card.Title>Feature 3</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
