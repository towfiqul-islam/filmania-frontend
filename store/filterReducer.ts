import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "../types/Movie";
import { RootState } from "./store";

interface FilterState {
    filters: Filters | {}
}

const initialState: FilterState = {
    filters: {}
}

export const filterReducer = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload
        }
    }
})

export const {setFilters} = filterReducer.actions

export const selectFilters = (state: RootState) => state.filter.filters

export default filterReducer.reducer