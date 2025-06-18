import { configureStore } from "@reduxjs/toolkit";
import PaginationSlice from "./paginationSlice";
import MovieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        PaginationSlice: PaginationSlice.reducer,
        MovieSlice: MovieSlice.reducer
    }
})

export default store;