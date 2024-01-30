import {createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        searchBar:false,
    },
    reducers:{
        changeSearchBar:(state)=>{
            state.searchBar = !state.searchBar
        },
    }
});
export const {changeSearchBar} = gptSlice.actions;
export default gptSlice.reducer;