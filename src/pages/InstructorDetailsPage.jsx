import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNewEntry, getEntryById } from "../service";

export const InstructorDetailsPage = () => {
  const [data, setData] = useState();
  const params = useParams();

  const navigate = useNavigate();

  const [createCourse, setCreateCourse] = useState(false);

  const [courseName, setCourseName] = useState("");
  const [credit, setCredit] = useState("");
  const [capacity, setCapacity] = useState("");
  const [department, setDepartment] = useState("");

  const handleCreate = () => {
    if (courseName != "" && credit != "" && capacity != "") {
      createNewEntry(`/instructor/${params.id}/create/course`, {
        courseName: courseName,
        credits: credit,
        capacity: capacity,
        department: department,
      }).then((res) => {
        setCourseName("");
        setCapacity("");
        setCredit("");
        setDepartment("");
        navigate("/admin", {state: {tab: 3}});
      });
    } else {

    }
  };

  const handleDelete = (id) => {
    deleteEntry("/course/", id).then(() => {
      setData((prevData) => prevData.filter((item) => item.id !== id));
    });
  };

  useEffect(() => {
    getEntryById("/instructor/", params.id).then((res) => setData(res));
  }, []);

  return (
    <div className="w-screen h-screen pl-20 pt-20 overflow-hidden">
      {data && (
        <div>
          <div className="text-3xl mb-4">{data.instructorName}</div>
          <div className="">office Location - {data.officeLocation}</div>
          <div className="">contact info - {data.contactInfo}</div>
          <div className="">salary - {data.salary}</div>

          <button className="bg-blue-600 my-4" onClick={() => setCreateCourse(!createCourse)}>
         { createCourse ?  "Hide" : "Create"} Course
          </button>

          {createCourse && (
            <div className="max-w-96 cursor-pointer relative bg-white/20 h-52 rounded overflow-hidden shadow-lg flex text-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCreate();
                }}
                className="w-full px-6 pt-4 flex items-start flex-col z-10"
              >
                <input
                  placeholder="Enter Course Name"
                  className="w-full p-1 disabled:bg-transparent"
                  autoFocus
                  type="text"
                  value={courseName}
                  onChange={(e) => {
                    e.stopPropagation();
                    setCourseName(e.target.value);
                  }}
                />

                <div className="h-1 mb-1"></div>

                <input
                  placeholder={"Enter Capacity"}
                  className="w-full p-1 disabled:bg-transparent"
                  type="number"
                  value={capacity}
                  onChange={(e) => {
                    setCapacity(e.target.value);
                  }}
                />

                <div className="h-1 mb-1"></div>

                <input
                  placeholder="Enter Credits"
                  className="w-full p-1 disabled:bg-transparent"
                  type="number"
                  value={credit}
                  onChange={(e) => {
                    setCredit(e.target.value);
                  }}
                />
                <div className="h-1 mb-1"></div>
                <input
                  placeholder="Enter Department"
                  className="w-full p-1 disabled:bg-transparent"
                  type="text"
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                />
              </form>

              <div className="absolute bottom-0 right-0 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCreate();
                  }}
                  className="py-0 text-xs rounded-none m-0 w-10 h-8 flex justify-center items-center bg-black/50 z-10"
                >
                  Done
                </button>

                <button
                  className="py-0 text-xs rounded-none m-0 w-8 h-8 flex justify-center items-center bg-red-600 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditMode(false);
                  }}
                >
                  D
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
