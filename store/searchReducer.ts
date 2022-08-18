import { createSlice } from "@reduxjs/toolkit";


export const searchReducer = createSlice({
    name: 'search',
    initialState: {
        searchResults: []
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        }
    }
})

export const {setSearchResults} = searchReducer.actions
export const selectSearchResults = (state: any) => state.search.searchResults

export default searchReducer.reducer;