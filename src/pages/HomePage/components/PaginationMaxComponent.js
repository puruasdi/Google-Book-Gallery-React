import { Form } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { changeMaxResults } from "../../../state/pageSlice"

function PaginationMaxComponent() {
    const { maxResults, data } = useSelector((state) => state.page)
    const { loading } = useSelector((state) => state.books)
    const dispatch = useDispatch()
    if (data) {
        return (
            <>{!loading &&
                <Form.Select value={maxResults} onChange={(e) => dispatch(changeMaxResults(e.target.value))}>
                    <option value="2">2 books per page</option>
                    <option value="3">3 books per page</option>
                    <option value="5">5 books per page</option>
                    <option value="10">10 books per page</option>
                </Form.Select>
            }
            </>
        )
    } else {
        return;
    }
}

export default PaginationMaxComponent