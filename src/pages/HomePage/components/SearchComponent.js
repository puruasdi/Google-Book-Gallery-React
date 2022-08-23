import {
    Button,
    Card,
    Form,
} from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux";
import { changeIntitle, changeInauthor, changeInpublisher, changeSubject } from "../../../state/searchSlice";

function SearchComponent(props) {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);
    const page = useSelector((state)=> state.page);
    const filter = useSelector((state)=> state.filter)

    return (
        <Card className="border-0 rounded-0">
            <Card.Body>
                <Card.Title className="mb-4 text-success">
                    Search
                </Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title :</Form.Label>
                        <Form.Control type="text" value={search.intitle} onChange={(e) => dispatch(changeIntitle(e.target.value))} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author :</Form.Label>
                        <Form.Control type="text" value={search.inauthor} onChange={(e) => dispatch(changeInauthor(e.target.value))} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Publisher :</Form.Label>
                        <Form.Control type="text" value={search.inpublisher} onChange={(e) => dispatch(changeInpublisher(e.target.value))} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category :</Form.Label>
                        <Form.Control type="text" value={search.subject} onChange={(e) => dispatch(changeSubject(e.target.value))} />
                    </Form.Group>
                </Form>
                <Button variant="warning" size="sm" className="mt-3 text-white fw-bold" onClick={() => props.handleFetchData(search, filter, page)}>Search</Button>
            </Card.Body>
        </Card>
    )
}

export default SearchComponent;