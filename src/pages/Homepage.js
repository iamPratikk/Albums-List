import React from "react";
import AlbumCard from "../components/AlbumCard";
import { useAlbumContext } from "../albumContext";

const Homepage = () => {
  // const { albums, loading, error } = useAlbumsList();
  const { albums, setAlbums ,loading, error } = useAlbumContext();
  // console.log(albums);

  
  const deleteAlbum = async (id) =>{
    const newAlbums = [...albums];
    const index = newAlbums.findIndex((item,index)=> item.id === id);
    // console.log(index)
    newAlbums.splice(index,1);
    setAlbums(newAlbums);
    try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
          method: 'delete',
          body: JSON.stringify(newAlbums),
        }
      );
      console.log(response);
    }catch(e){
      console.log(e.message)
    }
    
  }
  const updateAlbum = async (id, newTitle) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) =>
        album.id === id ? { ...album, title: newTitle } : album
      )
    );
    try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
          method: "put",
          body: JSON.stringify(albums),
        }
      );
      console.log(response);
    }catch(e){
      console.log(e.message)
    }
    
  };

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <h1>Error while fetching Albums</h1>;
  }
  return (
    <div className="body">
      {albums.map((item, index) => {
        return (
          <AlbumCard
            deleteAlbum = {deleteAlbum}
            key={item.id}
            title={item.title}
            id={item.id}
            userId={item.userId}
            updateAlbum={updateAlbum}
          />
        );
      })}
    </div>
  );
};

export default Homepage;
