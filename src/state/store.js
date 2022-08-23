import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./searchSlice";
import FilterREducer from "./filterSlice";
import BookReducer from "./bookSlice";
import PageReducer from "./pageSlice";

const store = configureStore({
    reducer: {
        search: SearchReducer,
        filter: FilterREducer,
        books: BookReducer,
        page: PageReducer,
    }
})

export default store;