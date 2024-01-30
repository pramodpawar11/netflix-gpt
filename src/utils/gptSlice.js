import {createSlice} from "@reduxjs/toolkit"
const gpt = createSlice({
    name:"gpt",
    initialState:{
        searchBar:false,
    },
    reducers:{
        changeSearchBar:(state,action)=>{
            state.searchBar = action.payload
        },
    }
});
export const {changeSearchBar} = gpt.actions;
export default gpt.reducer;