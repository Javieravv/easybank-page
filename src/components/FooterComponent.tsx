import { Image, Col, Container, Row, Button } from "react-bootstrap"

export const FooterComponent = () => {
  return (
    <Container 
        className="footer-main-container pt-5 pb-5"
        fluid
    >
        <Container 
            as={'footer'}
            fluid={'md'}
        >
            <Row>
                <Col 
                    lg={3} md={3} xs={12} 
                    className="d-flex flex-column justify-content-md-between justify-content-center align-items-md-start align-items-center"
                >
                    <div className="mt-1 mb-1">
                        <Image 
                            src="/images/logo1.svg"
                            alt="Logo"
                        />
                    </div>
                    <div className="mt-1 mb-1">
                        <img className="me-3" src="public/images/icon-facebook.svg" alt="" />
                        <img className="me-3" src="public/images/icon-youtube.svg" alt="" />
                        <img className="me-3" src="public/images/icon-twitter.svg" alt="" />
                        <img className="me-3" src="public/images/icon-pinterest.svg" alt="" />
                        <img className="me-3" src="public/images/icon-instagram.svg" alt="" />
                    </div>
                </Col>
                <Col 
                    lg={2} md={3} xs={12}
                    className="d-flex flex-column align-items-md-start align-items-center"
                >
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Blog</p>
                </Col>
                <Col 
                    lg={2} md={3} xs={12}
                    className="d-flex flex-column align-items-md-start align-items-center"
                >
                    <p>Careers</p>
                    <p>Support</p>
                    <p>Privacy Policy</p>
                </Col>
                <Col 
                    lg={5} md={3} xs={12}
                    className="d-flex flex-column justify-content-between align-items-md-end align-items-center"
                >
                    <Button
                        className="btn-easybank mt-1 mb-1"
                    >
                        Request Invite
                    </Button>
                    <p className="copyright mt-1 mb-1">Easybank. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}
