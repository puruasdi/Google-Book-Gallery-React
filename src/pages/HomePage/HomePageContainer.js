import axios from 'axios';
import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { succesGetBooks, getBooks } from "../../state/bookSlice";
import { setDataStatus } from '../../state/pageSlice';

import {
    Col,
    Row,
    Container
} from "react-bootstrap"

import NavbarComponent from "../ShareComponent/NavbarComponent";
import PaginationMaxComponent from './components/PaginationMaxComponent';
import PaginationComponent from './components/PaginationComponent';
import SearchComponent from "./components/SearchComponent";
import FilterComponent from "./components/FilterComponent";
import BookComponent from './components/BookComponent';

import { mainUrl, keyUrl } from '../../api/bookApi'

function HomePageContainer() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.search);
    const page = useSelector((state) => state.page);
    const filter = useSelector((state) => state.filter)

    const handleFetchData = useCallback(async (search, filter, page) => {
        dispatch(getBooks())
        //search url
        let newinauthor = "";
        let newinpublisher = "";
        let newsubject = "";

        if (search.inauthor) { newinauthor = "+inauthor:" + search.inauthor }
        if (search.inpublisher) { newinpublisher = "+inpublisher:" + search.inpublisher }
        if (search.subject) { newsubject = "+subject:" + search.subject }

        const searchUrl = `${search.intitle}${newinauthor}${newinpublisher}${newsubject}`.toLocaleLowerCase()

        let neworderBy = "";
        let newprintType = "";
        let newfilter = "";

        if (filter.orderBy) { neworderBy = "&orderBy=" + filter.orderBy }
        if (filter.printType) { newprintType = "&printType=" + filter.printType }
        if (filter.filter) { newfilter = "&filter=" + filter.filter }

        //filter url
        const filterUrl = `${neworderBy}${newprintType}${newfilter}`

        //pagination url
        const pageUrl = `&startIndex=${page.startIndex}&maxResults=${page.maxResults}`

        const result = await axios(
            `${mainUrl}${searchUrl}${filterUrl}${pageUrl}${keyUrl}`
        ).then(res => {
            return res
        }).catch(err => {
            return err
        })
        if (result.data) {
            dispatch(succesGetBooks(result.data.items));
            dispatch(setDataStatus(true))
        } else {
            dispatch(succesGetBooks([]));
        }
    }, [dispatch])

    const prevPage = useRef()
    const prevFilter = useRef()
    useEffect(() => {
        if (search.intitle) {
            if (prevPage.current !== page || prevFilter.current !== filter) {
                handleFetchData(search, filter, page)
            }
        }
        prevPage.current = page;
        prevFilter.current = filter
    }, [search, filter, page, handleFetchData])

    return (
        <>
            <NavbarComponent />
            <Container className="mt-4">
                <Row>
                    <Col sm={4}>
                        <SearchComponent handleFetchData={handleFetchData} />
                    </Col>
                    <Col sm={8}>
                        <FilterComponent />
                        <BookComponent />
                        <Row>
                            <Col xs={3}>
                                <PaginationMaxComponent />
                            </Col>
                            <Col xs={9}>
                                <PaginationComponent />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePageContainer