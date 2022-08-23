import {
    Card,
    Container,
    Button,
    Row,
    Col
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../ShareComponent/NavbarComponent';
import { useSelector } from 'react-redux';

export default function DetailPageContainer() {
    const navigate = useNavigate();
    const { bookDetail } = useSelector((state) => state.books)

    function handleNavigate() {
        navigate('/')
    }

    return (
        <>
            <NavbarComponent />
            <Container className="d-flex align-items-center justify-content-center mt-4">
                <Card style={{ width: '70rem' }}>
                    <Card.Header className="text-end">
                        <Button variant="secondary" size='sm' onClick={handleNavigate}>Back</Button>
                    </Card.Header>
                    <Card.Body>
                        {bookDetail &&
                            <Row>
                                <Col xs="12" md="3">
                                    <img src={bookDetail?.volumeInfo?.imageLinks?.thumbnail} alt="" style={{ width: "100%" }} />
                                </Col>
                                <Col xs="12" md="6">
                                    <Card.Title className='text-success fs-3'>{bookDetail?.volumeInfo?.title}</Card.Title>
                                    <p className="mb-4 fst-italic text-info">
                                        {bookDetail.volumeInfo?.authors?.map((author, index) =>
                                            <span key={index}>{author}{", "}</span>
                                        )}
                                    </p>
                                    <Card.Text>
                                        {bookDetail?.volumeInfo?.description}
                                    </Card.Text>
                                    <Row className='mt-4'>
                                        <Col md={2} xs={3}>
                                            <p className="text-muted mb-1">Categories:</p>
                                        </Col>
                                        <Col md={4} xs={9}>
                                            <p className="fs-6 mb-1">
                                                {bookDetail?.volumeInfo?.categories?.map((category, index) =>
                                                    <span key={index}>{category}{", "}</span>
                                                )}
                                            </p>
                                        </Col>
                                        <Col md={2} xs={6}>
                                            <p className="text-muted mb-1">Publisher:</p>
                                        </Col>
                                        <Col md={4} xs={6}>
                                            <p className="fs-6 mb-1">{bookDetail.volumeInfo.publisher}</p>
                                        </Col>
                                        <Col md={2} xs={6}>
                                            <p className="text-muted mb-1"> Date:</p>
                                        </Col>
                                        <Col md={4} xs={6}>
                                            <p className="fs-6 mb-1">{bookDetail.volumeInfo.publishedDate}</p>
                                        </Col>
                                        <Col md={2} xs={6}>
                                            <p className="text-muted mb-1">Pages:</p>
                                        </Col>
                                        <Col md={4} xs={6}>
                                            <p className="fs-6 mb-1">{bookDetail.volumeInfo.pageCount}</p>
                                        </Col>
                                        {bookDetail?.volumeInfo?.industryIdentifiers ?
                                            <>
                                                <Col md={2} xs={6}>
                                                    <p className="text-muted mb-1">ISBN 13:</p>
                                                </Col>
                                                <Col md={4} xs={6}>
                                                    <p className="fs-6 mb-1">{bookDetail?.volumeInfo?.industryIdentifiers[0]?.identifier}</p>

                                                </Col>
                                                <Col md={2} xs={6}>
                                                    <p className="text-muted mb-1">ISBN 10:</p>
                                                </Col>
                                                <Col md={4} xs={6}>
                                                    <p className="fs-6 mb-1">{bookDetail?.volumeInfo?.industryIdentifiers[1]?.identifier}</p>
                                                </Col>
                                            </> :
                                            <>
                                                <Col md={2} xs={6}>
                                                    <p className="text-muted mb-1">ISBN 13:</p>
                                                </Col>
                                                <Col md={4} xs={6}>
                                                </Col>
                                                <Col md={2} xs={6}>
                                                    <p className="text-muted mb-1">ISBN 10:</p>
                                                </Col>
                                                <Col md={4} xs={6}>
                                                </Col>
                                            </>
                                        }
                                    </Row>
                                </Col>
                                <Col xs="12" md="3" className='border-start text-center'>
                                    <Card.Text>
                                        <span className='text-muted'>PRICE</span>
                                    </Card.Text>
                                    <Card.Title className='text-success fs-3 mb-4'>{bookDetail?.saleInfo?.listPrice?.currencyCode}{" "}{bookDetail?.saleInfo?.listPrice?.amount}</Card.Title>
                                    <Card.Text>
                                        <span className='text-muted'>Retail</span>
                                    </Card.Text>
                                    <Card.Title className='text-warning fs-3 mb-4'>{bookDetail?.saleInfo?.retailPrice?.currencyCode}{" "}{bookDetail?.saleInfo?.retailPrice?.amount}</Card.Title>
                                </Col>
                            </Row>
                        }
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
