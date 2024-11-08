import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from './feature/Blog.slice'
import FormSlice from "./feature/Api.Slice"
import Destionation from './feature/Destination.slice'
import Planner from './feature/AiApi.Slice'
export const store = configureStore({
    reducer: {
            blogData:BlogReducer,
            formData:FormSlice,
            popularDestination:Destionation,
            aiPlanning:Planner,
        }
})