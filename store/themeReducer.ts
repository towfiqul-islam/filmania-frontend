import { createSlice } from "@reduxjs/toolkit";
import { changeTheme } from "../helper/themes";
import { RootState } from "./store";


export const themeReducer = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: 'light'
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.currentTheme = action.payload
            localStorage.setItem('theme', state.currentTheme)
            changeTheme(state.currentTheme)
        }
    }
})

export const {toggleTheme} = themeReducer.actions;

export const selectCurrentTheme = (state: RootState) => state.theme.currentTheme

export default themeReducer.reducer