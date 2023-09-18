import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
            <Navbar.Brand onClick={() => navigate('/')}>Mi App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate('/componentes')}>Componentes</Nav.Link>
                <Nav.Link onClick={() => navigate('/administracion')}>Administracion</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;