import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        intitle: "",
        inauthor: "",
        inpublisher: "",
        subject: ""
    },
    reducers: {
        changeIntitle(state, action) {
            state.intitle = action.payload
        },
        changeInauthor(state, action) {
            state.inauthor = action.payload
        },
        changeInpublisher(state, action) {
            state.inpublisher = action.payload
        },
        changeSubject(state, action) {
            state.subject = action.payload
        }
    }
});

export const { changeIntitle, changeInauthor, changeInpublisher, changeSubject } = searchSlice.actions;

export default searchSlice.reducer;