import movies_data from "../api/movies_data.json";
import MovieCard from "./MovieCard";

const MoviesData = () => {

  return (movies_data?.map((movie, index)=> <MovieCard key={movie.id} movie={movie}/>))
}

export default MoviesData;