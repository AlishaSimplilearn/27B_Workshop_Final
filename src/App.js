import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import movieDetailsReducer from './reducer';
import MovieDetails from './MovieDetails';

const store = configureStore({
  reducer: {
    movieDetails: movieDetailsReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <MovieDetails />
    </Provider>
  );
}

export default App;
