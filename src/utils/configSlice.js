import { createSlice } from "@reduxjs/toolkit";
const configSlice = createSlice({
    name:"config",
    initialState:{
        lag:"english",
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lag = action.payload
        }
    }
});
export const {changeLanguage} = configSlice.actions
export default configSlice.reducer