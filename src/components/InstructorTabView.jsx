import React, { useEffect, useState } from "react";
import { createNewEntry, deleteEntry, getAllEntry, updateExistingEntry } from "../service";
import { InstructorCard } from "./InstructorCard";

export const InstructorTabView = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [office, setOffice] = useState("");

  useEffect(() => {
    getAllEntry("/instructor").then((res) => setData(res));
  }, []);


  const handleCreate = () => {

    if (name != "" && salary != "" && office != "") {
      createNewEntry("/instructor", {
        instructorName: name,
        salary: salary,
        officeLocation: office
      }).then((res) => {
        setEditMode(false);
        setName("");
        setOffice("");
        setSalary("");
        setData((prevData) => [...prevData, res]);
      }
      )
    }
  }

  const handleDelete = (id) => {
    deleteEntry("/instructor/", id).then(() => {
      setData(prevData => prevData.filter(item => item.id !== id));
    });
  };

  return (
    <div className="w-full h-full transition-all duration-300 rounded-lg">
      {data && data.length == 0 && <div className="text-white">Empty</div>}

      <div className="pt-4 mx-auto flex">
        {data && data.length != 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
            {data.map((el, index) => {
              return (
                <InstructorCard
                  key={index}
                  id={el.instructorID}
                  instructorName={el.instructorName}
                  officeLocation={el.officeLocation}
                  instructorSalary={el.salary}
                  handleDelete={handleDelete}
                />
              );
            })}
            <div
              onClick={() => setEditMode(true)}
              className="cursor-pointer relative bg-white/20 h-44 rounded overflow-hidden shadow-lg flex text-white"
            >
              {editMode ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCreate();
                  }}
                  className="w-full px-6 pt-4 flex items-start flex-col z-10"
                >
                  <input
                    placeholder="Enter Name"
                    className="w-full p-1 disabled:bg-transparent"
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => {
                      e.stopPropagation(); setName(e.target.value);
                    }}
                  />

                  <div className="h-1 mb-1"></div>

                  <input
                    placeholder="Enter Office"
                    className="w-full p-1 disabled:bg-transparent"
                    type="text"
                    value={office}
                    onChange={(e) => {
                      setOffice(e.target.value);
                    }}
                  />

                  <div className="h-1 mb-1"></div>

                  <input
                    placeholder="Enter Salary"
                    className="w-full p-1 disabled:bg-transparent"
                    type="text"
                    value={salary}
                    onChange={(e) => {
                      setSalary(e.target.value);
                    }}
                  />
                </form>
              ) : (
                <div className="text-4xl pb-2 w-full h-full text-center flex justify-center items-center">
                  +
                </div>
              )}
              {editMode && (
                <div className="absolute bottom-0 right-0 flex items-center">
                  <button
                    onClick={(e) => { handleCreate(); }}
                    className="py-0 text-xs rounded-none m-0 w-10 h-8 flex justify-center items-center bg-black/50 z-10"
                  >
                    Done
                  </button>
                  <button
                    className="py-0 text-xs rounded-none m-0 w-8 h-8 flex justify-center items-center bg-red-600 z-10"
                    onClick={(e) => { e.stopPropagation(); setEditMode(false); }}
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
