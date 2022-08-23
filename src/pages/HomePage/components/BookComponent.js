import { useSelector, useDispatch } from 'react-redux';
import {
    Col,
    Card,
    Row,
} from "react-bootstrap"

import { setBookDetail } from "../../../state/bookSlice";
import { useNavigate } from 'react-router-dom';

function BookComponent() {
    const { books, loading } = useSelector((state) => state.books);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSetBook = (book) => {
        dispatch(setBookDetail(book))
        navigate('/detail')
    }

    return (
        <>
            {loading ?
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="lds-dual-ring" />
                    </Col>
                </Row> :
                books && books.map((book) =>
                    <Card key={book.id} className="border-0 rounded-0 mb-4">
                        <Card.Body>
                            <Row>
                                <Col md={3} xs={12}>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                                </Col>
                                <Col md={9} xs={12}>
                                    <a href="#asdi" className="fs-5 text-info" onClick={() => handleSetBook(book)}>{book.volumeInfo.title}</a>
                                    <p className="mb-4 fst-italic text-success">
                                        {book.volumeInfo?.authors?.map((author, index) =>
                                            <span key={index}>{author}{", "}</span>
                                        )}
                                    </p>
                                    <Row>
                                        <Col md={2} xs={3}>
                                            <p className="text-muted mb-1">Categories:</p>
                                        </Col>
                                        <Col md={4} xs={9}>
                                            <p className="fs-6 mb-1">
                                                {book?.volumeInfo?.categories?.map((category, index) =>
                                                    <span key={index}>{category}{", "}</span>
                                                )}
                                            </p>
                                        </Col>
                                        <Col md={2} xs={6}>
                                            <p className="text-muted mb-1">Publisher:</p>
                                        </Col>
                                        <Col md={4} xs={6}>
                                            <p className="fs-6 mb-1">{book.volumeInfo.publisher}</p>
                                        </Col>
                                        <Col md={2} xs={6}>
                                            <p className="text-muted mb-1"> Date:</p>
                                        </Col>
                                        <Col md={4} xs={6}>
                                            <p className="fs-6 mb-1">{book.volumeInfo.publishedDate}</p>
                                        </Col>
                                        <Col md={2} xs={6}>
                                            <p className="text-muted mb-1">Pages:</p>
                                        </Col>
                                        <Col md={4} xs={6}>
                                            <p className="fs-6 mb-1">{book.volumeInfo.pageCount}</p>
                                        </Col>
                                        {book?.volumeInfo?.industryIdentifiers ?
                                            <>
                                                <Col md={2} xs={6}>
                                                    <p className="text-muted mb-1">ISBN 13:</p>
                                                </Col>
                                                <Col md={4} xs={6}>
                                                    <p className="fs-6 mb-1">{book?.volumeInfo?.industryIdentifiers[0]?.identifier}</p>

                                                </Col>
                                                <Col md={2} xs={6}>
                                                    <p className="text-muted mb-1">ISBN 10:</p>
                                                </Col>
                                                <Col md={4} xs={6}>
                                                    <p className="fs-6 mb-1">{book?.volumeInfo?.industryIdentifiers[1]?.identifier}</p>
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
                            </Row>
                        </Card.Body>
                    </Card>
                )
            }
        </>
    )
}

export default BookComponent;