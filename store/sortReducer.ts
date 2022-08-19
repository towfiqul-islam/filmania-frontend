import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const sortReducer = createSlice({
    name: 'sort',
    initialState: {
        sortBy: 'title_asc'
    },
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        }
    }
})

export const {setSortBy} = sortReducer.actions;

export const selectSortBy = (state: RootState) => state.sort.sortBy;

export default sortReducer.reducer;