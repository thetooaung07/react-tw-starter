import React, { useEffect, useState } from "react";
import { createNewEntry, deleteEntry, getAllEntry, updateExistingEntry } from "../service";
import { StudentCard } from "./StudentCard";

export const StudentTabView = () => {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [gpa, setGpa] = useState("");

  useEffect(() => {
    getAllEntry("/student").then((res) => setData(res));
  }, []);


  const handleCreate = () => {

    if (name != "" && dob != "" && contactInfo != "") {
      createNewEntry("/student", {
        studentName: name,
        dateOfBirth: dob,
        contactInfo: contactInfo,
        gpa: gpa
      }).then((res) => {
        setEditMode(false);
        setName("");
        setContactInfo("");
        setDob("");
        setGpa("");
        setData((prevData) => [...prevData, res]);
      }
      )
    } else {
      setEditMode(false);
    }
  }

  const handleDelete = (id) => {
    deleteEntry("/student/", id).then(() => {
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
                <StudentCard
                  key={index}
                  id={el.id}
                  studentName={el.studentName}
                  studentDob={el.dateOfBirth}
                  studentContactInfo={el.contactInfo}
                  studentGpa={el.gpa}
                  handleDelete={handleDelete}
                />
              );
            })}
            <div
              onClick={() => setEditMode(true)}
              className="cursor-pointer relative bg-white/20 h-52 rounded overflow-hidden shadow-lg flex text-white"
            >
              {editMode ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
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
                    placeholder={"DOB: YYYY-MM-DD"}
                    className="w-full p-1 disabled:bg-transparent"
                    type="text"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />

                  <div className="h-1 mb-1"></div>

                  <input
                    placeholder="Enter Contact Info"
                    className="w-full p-1 disabled:bg-transparent"
                    type="text"
                    value={contactInfo}
                    onChange={(e) => {
                      setContactInfo(e.target.value);
                    }}
                  />
                  <div className="h-1 mb-1"></div>
                  <input
                    placeholder="Enter GPA"
                    className="w-full p-1 disabled:bg-transparent"
                    type="number"
                    value={gpa}
                    onChange={(e) => {
                      setGpa(e.target.value);
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
                    onClick={(e) => { e.stopPropagation(); handleCreate(); }}
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
