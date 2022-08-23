import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        loading: false,
        bookDetail:{}
    },
    reducers: {
        succesGetBooks(state, action) {
            state.books = action.payload;
            state.loading = false;

        },
        getBooks(state) {
            state.books = [];
            state.loading = true
        },
        setBookDetail(state, action) {
            state.bookDetail = action.payload
        }
    }
})

export const { succesGetBooks, getBooks, setBookDetail } = bookSlice.actions

export default bookSlice.reducer;