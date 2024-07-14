import React, { useState } from "react";

const AlbumCard = ({ id, title, userId , updateAlbum ,deleteAlbum}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateAlbum(id, newTitle);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewTitle(title); // Reset to the original title
  };

  return (
    <div className="album-card">
    <div className="title-div">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <div className="id-div" >
        <h4>{id}</h4>
        <h4>{userId}</h4>
      </div>
      <div className="button-div" >
      {!isEditing && <button onClick={handleEditClick}>Edit</button>}
        <button onClick={()=>deleteAlbum(id)} >Delete</button>
      </div>
    </div>
  );
};

export default AlbumCard;
