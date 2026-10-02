import axios from "axios";

export const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_POPULAR_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    Accept: "application/json",
  },
});

export const getPopularMovies = async (params = {}) => {
  const response = await tmdbApi.get("/movie/popular", {
    params,
  });

  return response.data.results;
};

export const searchMovies = async (params = {}) => {
  const response = await tmdbApi.get("/search/movie", {
    params,
  });

  return response.data.results;
};

export const getMovieDetails = async (id: string | undefined) => {
  const response = await tmdbApi.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits",
    },
  });

  return response.data;
};
