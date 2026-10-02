import type { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
interface MovieListProps {
  movies: Movie[];
}
export const MovieList = ({ movies }: MovieListProps) => {
  if (movies.length === 0) {
    return <p className="text-center text-[#A1A1AA]">No movies found.</p>;
  }
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
