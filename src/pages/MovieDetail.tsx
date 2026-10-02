import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { MovieDetails } from "../types/movie";
import { getMovieDetails } from "../services/tmdbApi";
import { Rating } from "../components/Rating";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setmovieDetail] = useState<MovieDetails | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>();
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const movieDetails: MovieDetails = await getMovieDetails(id);
        setmovieDetail(movieDetails);
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
    fetchMovieDetail();
  }, [id]);
  return (
    <section className="min-h-screen bg-[#0B0B0F] text-white">
      {isLoading && (
        <p className="text-center text-[#A1A1AA]">Loading movie details...</p>
      )}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      {!isLoading && !error && (
        <>
          <div className="relative h-75 w-full md:h-112.5">
            {movieDetail?.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
                alt={movieDetail?.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#16161D]" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0F] via-[#0B0B0F]/50 to-transparent" />
          </div>
          <div className="relative mx-auto -mt-32 max-w-6xl px-6 pb-12">
            <div className="flex flex-col gap-8 md:flex-row">
              {/* Poster */}
              <div className="w-48 shrink-0 md:w-64">
                {movieDetail?.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
                    alt={movieDetail?.title}
                    className="w-full rounded-xl shadow-2xl"
                  />
                ) : (
                  <div className="flex h-72 items-center justify-center rounded-xl bg-[#16161D] text-[#A1A1AA]">
                    No Image
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="pt-4">
                <h1 className="text-3xl font-bold md:text-5xl">
                  {movieDetail?.title}
                </h1>

                {/* Release date + TMDB rating */}
                <div className="mt-4 flex flex-wrap gap-4 text-[#A1A1AA]">
                  <span>
                    {movieDetail?.release_date
                      ? movieDetail?.release_date.split("-")[0]
                      : "N/A"}
                  </span>

                  <span>•</span>

                  <span className="text-[#F5C518]">
                    ⭐ {movieDetail?.vote_average.toFixed(1)} / 10
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-3xl leading-7 text-[#D4D4D8]">
                  {movieDetail?.overview || "No description available."}
                </p>

                {/* User Rating */}
                <div className="mt-8">
                  <h2 className="mb-3 text-xl font-semibold">
                    Rate this movie
                  </h2>

                  <Rating />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
