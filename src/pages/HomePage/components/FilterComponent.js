import {
    Button,
    Col,
    Card,
    Form,
    Row,
} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, changeOrderBy, changePrintType, resetFilterState } from '../../../state/filterSlice';

function FilterComponent() {
    const { orderBy, printType, filter } = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    return (
        <Card className="border-0 rounded-0 mb-4">
            <Card.Body className="fw-bold" >
                <Row>
                    <Col className="mt-4 mt-lg-0" xs="12" sm={3}>
                        SORTING RESULT BY:
                    </Col>
                    <Col className="mt-4 mt-lg-0" xs="12" sm={2}>
                        <Form.Select size="sm" value={orderBy} onChange={(e) => dispatch(changeOrderBy(e.target.value))}>
                            <option value="" disabled className="text-muted">Order by</option>
                            <option value="relevance">Relevance</option>
                            <option value="newest">Newest</option>
                        </Form.Select>
                    </Col>
                    <Col className="mt-4 mt-lg-0" xs="12" sm={2}>
                        <Form.Select size="sm" value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))}>
                            <option value="" disabled className="text-muted">Filter by</option>
                            <option value="partial">Partial</option>
                            <option value="full">Full</option>
                            <option value="free-ebooks">Free Ebooks</option>
                            <option value="paid-ebooks">Paid Ebooks</option>
                            <option value="ebooks">Ebooks</option>
                        </Form.Select>
                    </Col>
                    <Col className="mt-4 mt-lg-0" xs="12" sm={3}>
                        <Form.Select size="sm" value={printType} onChange={(e) => dispatch(changePrintType(e.target.value))}>
                            <option value="" disabled className="text-muted">Print type by</option>
                            <option value="">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazine</option>
                        </Form.Select>
                    </Col>
                    <Col className="mt-4 mt-lg-0" xs="12" sm={2}>
                        <Button variant="danger" size="sm" className="text-white" onClick={() => dispatch(resetFilterState())}>Reset</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default FilterComponent;