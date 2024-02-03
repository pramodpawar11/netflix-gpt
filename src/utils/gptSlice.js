import {createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        searchBar:false,
        gptSearchedMovies:null,
        movieNames:null,
    },
    reducers:{
        changeSearchBar:(state)=>{
            state.searchBar = !state.searchBar
        },
        addgptSearchedMovies:(state,action)=>{
            state.gptSearchedMovies = action.payload; 
        },  
        addMovieNames:(state,action)=>{
            state.movieNames = action.payload;
        }
    },
});
export const {changeSearchBar,addgptSearchedMovies,addMovieNames} = gptSlice.actions;
export default gptSlice.reducer;