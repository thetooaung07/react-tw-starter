import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import PokemonImage from "../assets/pokemon.webp";

export const Card = ({ username, email, id, handleDelete }) => {
  const [name, setName] = useState(username);
  const [editMode, setEditMode] = useState(false);
  function handleEdit(e) {

    setEditMode(!editMode);
    if (name == '') setName(username);
  }

  return (
    <div className="bg-white/20 min-h-36 rounded overflow-hidden shadow-lg relative">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex items-center">
          <div className="">{id}.</div>
          <div className="flex-1">
           
              <form onSubmit={(e) =>{ e.preventDefault(); handleEdit();}}>
                <input
                  className="w-full disabled:bg-transparent"
                  type="text"
                  disabled={!editMode}
                  value={name}
                  onChange={(e) => {   setName(e.target.value)}}
                />
              </form>
           
          </div>
        </div>
        <p className="text-white">{email}</p>
      </div>

      <div className="absolute bottom-0 right-0 flex items-center">
        {editMode ? (
          <button
            className="py-0 text-xs rounded-none m-0 w-10 h-8 flex justify-center items-center bg-black/50"
            onClick={handleEdit}
          >
            Done
          </button>
        ) : (
          <button
            className="py-0 text-xs rounded-none m-0 w-10 h-8 flex justify-center items-center bg-black/50"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
        <button className="px-1 py-0 text-xs rounded-none m-0 w-8 h-8 flex justify-center items-center bg-red-600" onClick={() => handleDelete(id)}>
          D
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  handleDelete: PropTypes.func,
};
