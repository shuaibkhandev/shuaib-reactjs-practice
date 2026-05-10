import movies_data from "../api/movies_data.json";
import MovieCard from "./MovieCard";

const MoviesData = () => {

  return ( <ul className="grid grid-three-cols ">{movies_data?.map((movie, index)=> <MovieCard key={movie.id} movie={movie}/>)}</ul>)
}

export default MoviesData;