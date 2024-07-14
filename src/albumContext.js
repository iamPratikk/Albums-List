import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const AlbumContext = createContext();

export const useAlbumContext = () => {
  return useContext(AlbumContext);
};

export const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <AlbumContext.Provider value={{ albums, setAlbums, loading, error }}>
      {children}
    </AlbumContext.Provider>
  );
};