import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Movie {
  id: number;
  title: string;
  description: string;
  year: number;
}

interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (id: number) => void;
}

const MovieContext = createContext<MovieContextType | null>(null);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovieContext must be used within a provider");
  return context;
};

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};
