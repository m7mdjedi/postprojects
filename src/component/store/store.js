import { configureStore } from "@reduxjs/toolkit"
import projectReducer from './ProjectSlice'
import commentReducer from './CommentsSlice'
import themeReducer from './ThemeSlice'
import { theme } from "flowbite-react"
 const  store = configureStore({ 
    reducer:{ 
        project:projectReducer,
        comment:commentReducer,
        theme:themeReducer
    }
})
export default store;