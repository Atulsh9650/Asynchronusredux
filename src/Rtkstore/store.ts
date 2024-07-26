import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./api";


export const store=configureStore({
    reducer:{
        myapi:posts.reducer
    },
    middleware:(defaultMiddleware)=>
        defaultMiddleware().concat(posts.middleware)
})