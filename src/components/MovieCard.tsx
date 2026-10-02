import { useNavigate } from "react-router-dom";
import type { Movie } from "../types/movie";
interface MovieCardProps {
  movie: Movie;
}
export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  function handleClick(movie: Movie) {
    navigate(`/MovieDetail/${movie.id}`);
  }
  return (
    <article
      onClick={() => {
        handleClick(movie);
      }}
      className="group cursor-pointer overflow-hidden rounded-xl bg-[#16161D] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-72 items-center justify-center bg-[#22222B] text-[#A1A1AA]">
          No Image
        </div>
      )}

      <div className="p-4">
        <h3 className="truncate font-bold">{movie.title}</h3>

        <p className="mt-1 text-sm text-[#A1A1AA]">
          {movie.release_date?.split("-")[0] || "N/A"}
        </p>

        <p className="mt-2 text-[#F5C518]">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </article>
  );
};
