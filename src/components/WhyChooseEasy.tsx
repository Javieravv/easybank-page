import { FC } from "react";
import { Image, Col, Container, Row } from "react-bootstrap"

interface Props {
    icono: string;
    title: string;
    description: string;
}

const dataEasyBank: Props[] = [
    {
        icono: '/images/icon-online.svg',
        title: 'Online Banking',
        description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
        icono: '/images/icon-budgeting.svg',
        title: 'Simple Budgeting',
        description: `See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.`
    },
    {
        icono: '/images/icon-onboarding.svg',
        title: 'Fast Onboarding',
        description: `We don't do branches. Open your account in minutes online and start taking contorl of your finances right away`
    },
    {
        icono: '/images/icon-api.svg',
        title: 'Open API',
        description: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`
    }
]

const CardChoose:FC<Props> = ( { description, icono, title }) => {
    return (
        <Col
            className="pt-5 pb-3 text-md-start text-center"
            lg={3} md={6} xs={12}
        >
            <div
                className="mb-5"
            >
                <Image 
                    src={ icono }
                    alt={ title } 
                />
            </div>
            <h3 className="title-choose mb-5"> { title }</h3>
            <p> { description } </p>
        </Col>
    )
}


export const WhyChooseEasy:FC = () => {
    return (
        <Container
            fluid={true}
            className="container-why-container-main"
        >
            <Container
                fluid={'md'}
                as={'section'}
                className='why-container-main pt-5 pb-5'
            >
                <Row
                    className="text-center text-md-start"
                >
                    <Col lg={6} md={8} xs={12}>
                        <h1 className="mb-5">Why choose EasyBank?</h1>
                        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                    </Col>
                </Row>
                <Row>
                        {
                            dataEasyBank.map( dataEasy => (
                                <CardChoose 
                                    key={dataEasy.title}
                                    icono={ dataEasy.icono }
                                    title={dataEasy.title}
                                    description={dataEasy.description}
                                />
                            ))
                        }
                </Row>
            </Container>

        </Container>
    )
}
