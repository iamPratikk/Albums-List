import { useState, useEffect } from 'react';

const useAlbumsList = (newAlbums) => {
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
        if(newAlbums){
            setAlbums([...newAlbums, ...data]);
        }else{
            setAlbums([...data]);
        }
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [newAlbums]);

  return { albums, setAlbums, loading, setLoading, error };
};

export default useAlbumsList;