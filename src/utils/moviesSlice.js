import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        topratedMovies:null,
        popularMovies:null,
        moviesTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =  action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopratedMovies:(state,action)=>{
            state.topratedMovies = action.payload
        },
        addMoviesTrailer:(state,action)=>{
            state.moviesTrailer = action.payload
        }
    }  
});
export const {addNowPlayingMovies,addMoviesTrailer,addPopularMovies,addTopratedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;