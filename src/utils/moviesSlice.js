import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        moviesTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =  action.payload
        },
        addMoviesTrailer:(state,action)=>{
            state.moviesTrailer = action.payload
        }
    }  
});
export const {addNowPlayingMovies,addMoviesTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;