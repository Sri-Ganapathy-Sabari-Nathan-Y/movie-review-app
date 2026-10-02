import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/tmdbApi";
import type { Movie } from "../types/movie";
import { MovieList } from "../components/MovieList";

export const Home = () => {
  const [popularMovies, setpopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>();
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const popularMoviesList: Movie[] = await getPopularMovies({
          language: "en-US",
          page: 1,
        });
        setpopularMovies(popularMoviesList);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error"));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);
  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="mb-10 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">🎬 Movie Review</h1>

          <p className="mt-3 text-[#A1A1AA]">
            Search, explore and review your favorite movies.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-bold">Popular Movies</h2>
          {isLoading && (
            <p className="text-center text-[#A1A1AA]">Loading movies...</p>
          )}

          {error && <p className="text-center text-red-500">{error.message}</p>}

          {!isLoading && !error && <MovieList movies={popularMovies} />}
        </section>
      </div>
    </main>
  );
};
