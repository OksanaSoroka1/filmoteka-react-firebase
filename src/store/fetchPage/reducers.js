import { createSlice } from "@reduxjs/toolkit";

const fetchPageSlice = createSlice({
    name: 'fetchPage',
    initialState: {
        page: '1',
       
    },
    reducers: {
        setFetchPage(state, action) { state.page = action.payload },
       
    }

})
export const { setFetchPage} = fetchPageSlice.actions;
export default fetchPageSlice.reducer;