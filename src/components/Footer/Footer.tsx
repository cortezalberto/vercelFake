import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h5>Our Company</h5>
                        <p>Some information about your company.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h5>Contact Us</h5>
                        <p>Email: info@yourcompany.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
