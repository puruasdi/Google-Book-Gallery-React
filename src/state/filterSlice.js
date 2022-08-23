import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        orderBy: "",
        printType: "",
        filter: ""
    },
    reducers: {
        changeOrderBy(state, action) {
            state.orderBy = action.payload
        },
        changePrintType(state, action) {
            state.printType = action.payload
        },
        changeFilter(state, action) {
            state.filter = action.payload
        },
        resetFilterState(state) {
            state.orderBy = "";
            state.printType = "";
            state.filter = ""
        }
    }
})

export const { changeOrderBy, changePrintType, changeFilter, resetFilterState} = filterSlice.actions

export default filterSlice.reducer;