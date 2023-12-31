import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countryDetail: null
}

export const rapidApiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        setCountryDetail: (state, action) => {
            state.countryDetail = action.payload;

        },


    }
});

export const { setCountryDetail } = rapidApiSlice.actions;
export default rapidApiSlice.reducer;