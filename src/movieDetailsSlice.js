import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovieDetails = createAsyncThunk(
  'movieDetails/fetchMovieDetails',
  async () => {
    const response = await axios.get(
      'https://www.omdbapi.com/?i=tt3896198&apikey=367c5c57'
    );
    return response.data;
  }
);

const initialState = {
  movieData: [],
  status: 'idle',
  error: null,
};

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieData = [action.payload];
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieDetailsSlice.reducer;
