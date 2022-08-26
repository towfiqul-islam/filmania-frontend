import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/Movie";
import { RootState } from "./store";

interface SearchState {
    searchResults: Movie[],
    searchKey: string
}

const initialState: SearchState = {
    searchResults: [],
    searchKey: ''
}


export const searchReducer = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state, action: PayloadAction<Movie[]>) => {
            state.searchResults = action.payload
        },
        setSearchKey: (state, action: PayloadAction<string>) => {
            state.searchKey = action.payload
        }
    }
})

export const {setSearchResults, setSearchKey} = searchReducer.actions
export const selectSearchResults = (state: RootState) => state.search.searchResults
export const selectSearchKey = (state: RootState) => state.search.searchKey

export default searchReducer.reducer;