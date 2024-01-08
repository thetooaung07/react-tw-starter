import React, {  useState } from "react";
import { EditInput } from "./EditInput";
import {  updateExistingEntry } from "../service";
import { useNavigate } from "react-router-dom";

export const InstructorCard = ({ id, instructorName, instructorSalary, officeLocation, handleDelete }) => {
    const [name, setName] = useState(instructorName);
    const [salary, setSalary] = useState(instructorSalary);
    const [office, setOffice] = useState(officeLocation);


    const navigate = useNavigate();

    const [editMode, setEditMode] = useState(false);

    function handleEdit() {
        setEditMode(!editMode);
        if (name == '') setName(instructorName);
        if (salary == '') setSalary(instructorSalary);
        if (office == '') setOffice(officeLocation);
    }

    const handleUpdate = () => {

        if (name != instructorName || salary != instructorSalary || officeLocation != office) {
            updateExistingEntry("/instructor/", id,
                {
                    instructorName: name,
                    salary: salary,
                    officeLocation: office,
                }
            );
        }
        handleEdit();
    }



    return (
        <div className="bg-white/20 h-44 rounded overflow-hidden shadow-lg relative">
        
        
        <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/details/instructor/" + id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-external-link"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </div>

        
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-4 flex items-center">
                    <div className="">{id}.&nbsp;</div>
                    <div className="flex-1">
                        <EditInput
                            placeholder={"Enter Name"}
                            editMode={editMode}
                            handleUpdate={handleUpdate}
                            name={name}
                            setName={setName}
                        ></EditInput>
                    </div>
                </div>
                <EditInput
                    placeholder={"Enter Office"}
                    editMode={editMode}
                    handleUpdate={handleUpdate}
                    name={office}
                    setName={setOffice}
                ></EditInput>

                <div className="h-1 my-1"></div>
                <EditInput
                    placeholder={"Enter Salary"}
                    isNumber={true}
                    editMode={editMode}
                    handleUpdate={handleUpdate}
                    name={salary}
                    setName={setSalary}
                ></EditInput>
            </div>

            <div className="absolute bottom-0 right-0 flex items-center">
                {editMode ? (
                    <button
                        className="py-0 text-xs rounded-none m-0 w-10 h-8 flex justify-center items-center bg-black/50 bg-green-200 text-black"
                        onClick={handleUpdate}
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
                {!editMode && <button className="px-1 py-0 text-xs rounded-none m-0 w-8 h-8 flex justify-center items-center bg-red-600" onClick={() => handleDelete(id)}>
                    D
                </button>}
            </div>
        </div>
    );
};

