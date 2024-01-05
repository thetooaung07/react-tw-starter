import React, { useEffect, useState } from "react";
import { createNewEntry, deleteEntry, getAllEntry } from "../service";
import { Card } from "./Card";

export const StudentTabView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllEntry().then((res) => setData(res));
  }, []);

  const handleAddEntry = () => {
    createNewEntry().then((res) =>  setData(prevData => [...prevData, res]));
  };

  const handleDelete = (id) => {
    // deleteEntry(id).then(() => {
    //   setData(prevData => prevData.filter(item => item.id !== id));
    // });


    setData(prevData => prevData.filter(item => item.id !== id));

    
    
  }

  return (
    <div className="w-full h-full transition-all duration-300 rounded-lg">

    {data && data.length == 0 && <div className="text-white">Empty</div>}

      <div className="pt-4 mx-auto flex">
        {data && data.length != 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
            {data.map((el, index) => {
              return (
                <Card key={index} username={el.username} email={el.email} id={el.id} handleDelete={handleDelete} />
              );
            })}
            <div
              onClick={handleAddEntry}
              className="cursor-pointer bg-white/20 min-h-36 rounded overflow-hidden shadow-lg flex justify-center items-center"
            >
              <div className="text-4xl pb-2">+</div>
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
};
