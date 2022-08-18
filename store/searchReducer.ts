import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";


export const searchReducer = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        searchKey: ''
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload
        }
    }
})

export const {setSearchResults, setSearchKey} = searchReducer.actions
export const selectSearchResults = (state: RootState) => state.search.searchResults
export const selectSearchKey = (state: RootState) => state.search.searchKey

export default searchReducer.reducer;