import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <Navbar
            className='bg-body'
            fixed='top'
            expand="md"
        >
            <Container fluid='md'
                className='bg-body'
            >
                <Navbar.Brand href="#">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="me-auto col justify-content-center ">
                        <Nav.Link className="fw-bold" href="#">Home</Nav.Link>
                        <Nav.Link className="fw-bold" href="#">About</Nav.Link>
                        <Nav.Link className="fw-bold" href="#">Contact</Nav.Link>
                        <Nav.Link className="fw-bold" href="#">Blog</Nav.Link>
                        <Nav.Link className="fw-bold" href="#">Careers</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button
                            className='btn-easybank justify-content-center'
                        >
                            request invite
                        </Button>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

