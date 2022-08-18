import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const filterReducer = createSlice({
    name: 'filter',
    initialState: {
        filters: {}
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload
        }
    }
})

export const {setFilters} = filterReducer.actions

export const selectFilters = (state: RootState) => state.filter.filters

export default filterReducer.reducer