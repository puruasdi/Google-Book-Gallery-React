import { useState } from "react";
import { Pagination } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changeStartIndex } from "../../../state/pageSlice";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function PaginatedComponent() {
    const { data, maxResults } = useSelector((state) => state.page)
    const { loading } = useSelector((state) => state.books)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    function handleChangePage(page) {
        setCurrentPage(page)
        dispatch(changeStartIndex(maxResults + page - 1))
    };

    return (
        <>
            {data && !loading ?
                <Pagination>
                    <Pagination.First onClick={() => handleChangePage(1)} disabled={currentPage === 1} />
                    <Pagination.Prev onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1} />
                    {pages.map((page, index) =>
                        <Pagination.Item key={index} onClick={() => handleChangePage(page)} active={currentPage === page} >{page}</Pagination.Item>
                    )}
                    <Pagination.Next onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === 10} />
                    <Pagination.Last onClick={() => handleChangePage(10)} disabled={currentPage === 10} />
                </Pagination> :
                null
            }
        </>
    )
}

export default PaginatedComponent;