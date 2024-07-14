import React, { useEffect, useState } from "react";
import { useAlbumContext } from "../albumContext";

const AddAlbum = () => {
  const [title, setTitle] = useState("");
  const { albums, setAlbums } = useAlbumContext();

  let length = albums.length;
  useEffect(() => {
    console.log(albums);
  }, [albums]);

  const addAlbumToList = async () => {
    const newAlbum = {
      id: ++length,
      userId: 10,
      title: title,
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums",
      {
        method: "post",
        body: JSON.stringify(newAlbum),
      }
    );
    console.log(response);
    // setAlbums(prevAlbums=>[...prevAlbums,newAlbum]);
    setAlbums((prevAlbums) => [...prevAlbums, newAlbum]);
    setTitle("");
    console.log("list updated");
  };

  return (
    <div className="add-album" >
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addAlbumToList}>submit</button>
    </div>
  );
};

export default AddAlbum;
