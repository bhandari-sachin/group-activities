import React, { useState, useEffect, useCallback, useRef, use } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { updateSearchCount, getTrendingMovies } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const controllerRef = useRef(null);

  const fetchMovies = useCallback(async (query = "") => {
    setIsLoading(true);
    setErrorMessage(null);

    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, {
        ...API_OPTIONS,
        signal: controllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      setMovies(data.results || []);
      if (query && data.results && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error fetching movies:", error);
        setErrorMessage("Failed to fetch movies. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadTrendingMovies = useCallback(async () => {
    try {
      const searches = await getTrendingMovies();
      setTrendingMovies(searches);
    } catch (error) {
      console.error("Error loading trending searches:", error);
    }
  });

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchMovies(searchTerm);
    }, 1000);

    return () => clearTimeout(delay);
  }, [searchTerm, fetchMovies]);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>
          {trendingMovies.length > 0 && (
            <section className="trending">
              <h2>Trending Movies</h2>
              <ul>
                {trendingMovies.map((item, index) => (
                  <li key={item.$id}>
                    <p>{index + 1}</p>
                    <img
                      src={item.poster_url}
                      alt={item.searchTerm}
                      width="50"
                    />
                    <span>{item.searchTerm}</span>
                    <span className="count">{item.count} searches</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="all-movies">
            <h2>All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
