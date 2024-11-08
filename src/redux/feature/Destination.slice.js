import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    destinationData: null,
    isLoading: true,
    isError: false,
    error:null
};

export const destination = createAsyncThunk("popularPlaces", async (formData, { rejectWithValue }) => {
    // console.log(formData)
    try {
        // console.log(formData)
        const url = `https://travel-info-api.p.rapidapi.com/country?country=${formData}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '55a186c086msh1d0e11ce2c66507p1e3090jsn7b333251d5aa',
                'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        // Handle error
        return rejectWithValue(error.message);
    }
});
const popularDestionation = createSlice({
    name: 'pDestination',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(destination.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(destination.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.destinationData = action.payload.data;
            // console.log(state.destinationData)
        });

        builder.addCase(destination.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });

},
});

export default popularDestionation.reducer;