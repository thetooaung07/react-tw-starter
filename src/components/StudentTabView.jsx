import React, { useEffect, useState } from "react";
import { createNewEntry, deleteEntry, getAllEntry } from "../service";
import { Card } from "./Card";

export const StudentTabView = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getAllEntry().then((res) => setData(res));
  }, []);

  const handleAddEntry = () => {
    setEditMode(true);
    // createNewEntry().then((res) => setData((prevData) => [...prevData, res]));
  };

  const handleCreate = () => {

    setEditMode(false);
    setName("");
    setEmail("");
  } 

  const handleDelete = (id) => {
    // deleteEntry(id).then(() => {
    //   setData(prevData => prevData.filter(item => item.id !== id));
    // });

    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full h-full transition-all duration-300 rounded-lg">
      {data && data.length == 0 && <div className="text-white">Empty</div>}

      <div className="pt-4 mx-auto flex">
        {data && data.length != 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
            {data.map((el, index) => {
              return (
                <Card
                  key={index}
                  username={el.username}
                  email={el.email}
                  id={el.id}
                  handleDelete={handleDelete}
                />
              );
            })}
            <div
              onClick={() => setEditMode(true)}
              className="cursor-pointer relative bg-white/20 min-h-36 rounded overflow-hidden shadow-lg flex text-white"
            >
              {editMode ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full px-6 pt-4 flex items-start flex-col"
                >
                  <input
                    placeholder="Enter Name"
                    className="w-full p-1 disabled:bg-transparent"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <div className="h-1 m-1"></div>

                  <input
                    placeholder="Enter Email"
                    className="w-full p-1 disabled:bg-transparent"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </form>
              ) : (
                <div className="text-4xl pb-2 w-full h-full text-center flex justify-center items-center">
                  +
                </div>
              )}
              {editMode && (
                <div className="absolute bottom-0 right-0 flex items-center z-10">
                  <button
                    onClick={(e) => {e.stopPropagation();handleCreate();}}
                    className="py-0 text-xs rounded-none m-0 w-10 h-8 flex justify-center items-center bg-black/50"
                  >
                    Done
                  </button>
                  <button
                    className="py-0 text-xs rounded-none m-0 w-8 h-8 flex justify-center items-center bg-red-600"
                    onClick={() => alert("Hello")}
                  >
                    D
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
