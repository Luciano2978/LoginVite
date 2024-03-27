import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    MetadataUser: [],
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        saveDataUser: (state,action) => {
            state.MetadataUser = action.payload;
        }
    }
})

export const {saveDataUser} = userSlice.actions;
export default userSlice.reducer;
