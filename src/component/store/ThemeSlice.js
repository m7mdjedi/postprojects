import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        dark:false
    },
    reducers: {
      changeDark: (state, action) => {
        state.dark=!(state.dark);
      },

    } 
})

export default themeSlice.reducer; 
export const {changeDark} = themeSlice.actions; 