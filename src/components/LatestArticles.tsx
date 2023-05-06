import { FC } from "react";
import { Image, Col, Container, Row } from "react-bootstrap"
import '../scss/easybank-styles.scss';

interface Props {
    image: string;
    author: string;
    title: string;
    textArticle: string;
}

const dataEasyBank: Props[] = [
    {
        image: '/images/image-currency.jpg',
        author: 'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        textArticle: `Whte world is getting smaller and we're becoming more mobile. So why should you be forced to only received money in a single...`
    },
    {
        image: '/images/image-restaurant.jpg',
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        textArticle: `Our simple budgeting feature allows you to separate out yours spending and set realistic limits each month. That means you...`
    },
    {
        image: '/images/image-plane.jpg',
        author: 'Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        textArticle: `We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even shoy you...`
    },
    {
        image: '/images/image-confetti.jpg',
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live',
        textArticle: `After a lot of hard work by the whole team, we're excited to launch our clossed beta. It's easy to request an invite through the site...`
    }
]

const CardArticle:FC<Props> = ( { textArticle, image, title, author }) => {
    return (
        <Col
            className="pt-5 pb-3"
            lg={3} md={6} xs={12}
        >
            <div
                className="mb-5"
            >
                <Image 
                    src={ image }
                    alt={ title } 
                    fluid={true}
                    className="image-article rounded-1"
                />
            </div>
            <p className="">By {author} </p>
            <h3 className="title-article mb-5 text-md-start text-center"> { title }</h3>
            <p> { textArticle } </p>
        </Col>
    )
}


export const LatestArticles:FC = () => {
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
                            dataEasyBank.map( dataArticle => (
                                <CardArticle 
                                    key={dataArticle.title}
                                    image={ dataArticle.image }
                                    title={dataArticle.title}
                                    textArticle={dataArticle.textArticle}
                                    author={dataArticle.author}
                                />
                            ))
                        }
                </Row>
            </Container>

        </Container>
    )
}
