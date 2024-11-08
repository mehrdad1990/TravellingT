import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tourPlan: null,
  isLoading: true,
  isError: false,
  error: null,
};

export const TourPlanning = createAsyncThunk(
  "planning/fetchTourPlan",
  async (formData, { rejectWithValue }) => {
    // console.log(formData)
    try {
      const { destination, days } = formData;
      const url = `https://ai-vacation-planner.p.rapidapi.com/vacationplan/${destination}/${days}/sightseeing,shopping`;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '55a186c086msh1d0e11ce2c66507p1e3090jsn7b333251d5aa',
          'X-RapidAPI-Host': 'ai-vacation-planner.p.rapidapi.com',
        },
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch tour plan');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const AiPlanning = createSlice({
  name: 'planningTour',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TourPlanning.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(TourPlanning.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.tourPlan = action.payload;
    });

    builder.addCase(TourPlanning.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default AiPlanning.reducer;
