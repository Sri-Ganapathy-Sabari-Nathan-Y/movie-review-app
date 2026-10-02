import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdbApi";
import type { Movie } from "../types/movie";
import { MovieList } from "../components/MovieList";
import { SearchBar } from "../components/SearchBar";
import { FilterBar } from "../components/FilterBar";

export const Search = () => {
  const [popularMovies, setpopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
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
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const moviesList: Movie[] = await searchMovies({
          query: searchQuery,
          include_adult: false,
          language: "en-US",
          page: 1,
        });
        setMovies(moviesList);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
          console.log(error);
        } else {
          setError(new Error("Unknown error"));
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery === "") {
      fetchPopularMovies();
    } else {
      fetchMovies();
    }
  }, [searchQuery]);
  let filteredMovies;
  if (searchQuery === "") {
    filteredMovies = popularMovies.filter((movie) => {
      const matchesGenre = !genre || movie.genre_ids.includes(Number(genre));
      const matchesYear = !year || movie.release_date?.startsWith(year);
      const matchesRating = !rating || movie.vote_average >= Number(rating);
      return matchesGenre && matchesYear && matchesRating;
    });
  } else {
    filteredMovies = movies.filter((movie) => {
      const matchesGenre = !genre || movie.genre_ids.includes(Number(genre));
      const matchesYear = !year || movie.release_date?.startsWith(year);
      const matchesRating = !rating || movie.vote_average >= Number(rating);
      return matchesGenre && matchesYear && matchesRating;
    });
  }
  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="mb-10 text-center">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FilterBar
            genre={genre}
            year={year}
            rating={rating}
            setGenre={setGenre}
            setYear={setYear}
            setRating={setRating}
          />
        </section>
        <section className="mt-10">
          <h2 className="mb-6 text-2xl font-bold">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : "Popular Movies"}
          </h2>
          {isLoading && (
            <p className="text-center text-[#A1A1AA]">Loading movies...</p>
          )}

          {error && <p className="text-center text-red-500">{error.message}</p>}

          {!isLoading && !error && <MovieList movies={filteredMovies} />}
        </section>
      </div>
    </main>
  );
};
