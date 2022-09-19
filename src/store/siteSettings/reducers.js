import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        colorTheme: 'light',
        listStyle: 'grid',
        modalIsOpen: false,
    },
    reducers: {
        setColorTheme(state, action) { state.colorTheme = action.payload },
        setListStyle(state, action) { state.listStyle = action.payload },
        setModalVisibility(state, action) {state.modalIsOpen = action.payload }
    }

})
export const { setColorTheme, setListStyle , setModalVisibility} = settingsSlice.actions;
export default settingsSlice.reducer;