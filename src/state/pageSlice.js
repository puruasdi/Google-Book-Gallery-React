import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        startIndex: 0,
        maxResults: 2,
        data: false
    },
    reducers: {
        changeStartIndex(state, action) {
            state.startIndex = action.payload
        },
        changeMaxResults(state, action) {
            state.maxResults = action.payload
        },
        setDataStatus(state, action) {
            state.data = action.payload
        }
    }
})

export const { changeStartIndex, changeMaxResults, setDataStatus } = pageSlice.actions;

export default pageSlice.reducer;