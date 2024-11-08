"use client"

import { createSlice } from "@reduxjs/toolkit"
import blogs from '../../Data/Blog.json'

const initialState = {
 allBlogs:blogs,
 singleBlog:[]
}

export const blogSlice = createSlice({

    name:'blogs',
    initialState,
    reducers:{

    },

})
 export default blogSlice.reducer