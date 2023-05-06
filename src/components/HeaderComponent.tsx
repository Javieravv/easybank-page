import { Image, Button, Col, Container, Row } from "react-bootstrap"

export const HeaderComponent = () => (
    <Container fluid>
        <Container fluid='md' className="header-easybank mb-5">
            <Row
                as={'section'}
                className="rowheader-main d-flex flex-row-reverse"
            >
                {/**Parte derecha del header */}
                <Col
                    lg={6} md={6} xs={12}
                    className="img-mockup "
                >
                    <Image
                        src="/images/image-mockups.png"
                        alt='Imagen'
                        fluid={false}
                        className="imagen-mockup"
                        style={{marginTop: '-70px'}}
                    />
                </Col>

                {/**Parte izquierda del header */}
                <Col
                    lg={6} md={6} xs={12}
                    className="d-flex flex-column justify-content-center justify-content-md-center text-center text-md-start"
                >
                    <h1 className="mb-4">Next generation digital banking</h1>
                    <p className="mb-4">Take your financial life online. Your Easybank account will be a one-stop shop for spending, saving, budgeting, investing and much more.</p>
                    <Row
                        className="d-flex align-items-center justify-content-center justify-content-md-start"
                    >
                        <Col
                            lg={5} md={6} xs={8}
                        >
                            <Button
                                className="btn-easybank me-auto"
                            >
                                request invite
                            </Button>
                        </Col>
                    </Row>
                </Col>




            </Row>
        </Container>
    </Container>
)
