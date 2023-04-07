import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieDetails } from './movieDetailsSlice';
import './App.css';

function MovieDetails() {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movieDetails.movieData);
  const movieStatus = useSelector((state) => state.movieDetails.status);

  useEffect(() => {
    dispatch(fetchMovieDetails());
  }, [dispatch]);

  let content;

  if (movieStatus === 'loading') {
    content = <div><h1>Loading...</h1></div>;
  } else if (movieStatus === 'succeeded') {
    content = (
      <div>
        {movieData.map((movie) => (
          <div key={movie.imdbID}>
            <h3> {movie.Title}</h3>
            <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/>
            <ul>
              <li><span class="label">Year:</span>  {movie.Year}</li>
              <li><span class="label">Rated:</span> {movie.Rated}</li>
              <li><span class="label">Released:</span> {movie.Released}</li>
              <li><span class="label">Runtime:</span> {movie.Runtime}</li>
              <li><span class="label">Genre:</span> {movie.Genre}</li>
              <li><span class="label">Director:</span> {movie.Director}</li>
              <li><span class="label">Writer:</span> {movie.Writer}</li>
              <li><span class="label">Actors:</span> {movie.Actors}</li>
              <li><span class="label">Awards:</span> {movie.Awards}</li>
              <li><span class="label">Language:</span>{movie.Language}</li>
              <li><span class="label">Country:</span> {movie.Country}</li>
              <li><span class="label">IMDB Rating:</span>{movie.imdbRating}</li>
              <li><span class="label">Metascore:</span> {movie.Metascore}</li>
              <li><span class="label">IMDB Votes:</span>{movie.imdbVotes}</li>
              <li><span class="label">Type:</span> {movie.Type}</li>
              <li><span class="label">DVD:</span> {movie.DVD}</li>
              <li><span class="label">Plot:</span> {movie.Plot}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default MovieDetails;