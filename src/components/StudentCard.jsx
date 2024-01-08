import React, { useState } from "react";
import { EditInput } from "./EditInput";
import { updateExistingEntry } from "../service";
import { useNavigate } from "react-router-dom";

export const StudentCard = ({
  id,
  studentName,
  studentDob,
  studentContactInfo,
  studentGpa,
  handleDelete,
}) => {
  const [name, setName] = useState(studentName);
  const [dob, setDob] = useState(studentDob);
  const [contactInfo, setContactInfo] = useState(studentContactInfo);
  const [gpa, setGpa] = useState(studentGpa);

  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  function handleEdit(e) {
    setEditMode(!editMode);
    if (name == "") setName(studentName);
    if (dob == "") setDob(studentDob);
    if (contactInfo == "") setContactInfo(studentContactInfo);
    if (gpa == "") setContactInfo(studentContactInfo);
  }

  const handleUpdate = (e) => {
    e.stopPropagation();
    if (
      name != studentName ||
      dob != studentDob ||
      studentContactInfo != contactInfo
    ) {
      updateExistingEntry("/student/", id, {
        studentName: name,
        dateOfBirth: dob,
        contactInfo: contactInfo,
        gpa: gpa,
      });
    }
    handleEdit();
  };

  return (
    <div className="bg-white/20 h-52 rounded overflow-hidden shadow-lg relative">
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/details/student/" + id);
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
          <div className="">
            <EditInput
              placeholder={"Enter Name"}
              editMode={editMode}
              handleUpdate={handleUpdate}
              name={name}
              setName={setName}
            ></EditInput>
          </div>
        </div>

        <div className="-ml-1">
          <EditInput
            placeholder={"Enter Contact Info"}
            editMode={editMode}
            handleUpdate={handleUpdate}
            name={contactInfo}
            setName={setContactInfo}
          ></EditInput>
        </div>

        <div className="h-1 my-1"></div>
        <div className="flex justify-between items-center">
          <div className="text-sm">dob&nbsp;-&nbsp;</div>
          <EditInput
            placeholder={"YYYY-MM-DD"}
            editMode={editMode}
            handleUpdate={handleUpdate}
            name={dob}
            setName={setDob}
          ></EditInput>
        </div>

        <div className="h-1 my-1"></div>
        <div className="flex justify-between items-center">
          <div className="text-sm">gpa&nbsp;-&nbsp;</div>
          <EditInput
            placeholder={"Enter gpa"}
            isNumber={true}
            editMode={editMode}
            handleUpdate={handleUpdate}
            name={gpa}
            setName={setGpa}
          ></EditInput>
        </div>
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
        {!editMode && (
          <button
            className="px-1 py-0 text-xs rounded-none m-0 w-8 h-8 flex justify-center items-center bg-red-600"
            onClick={() => handleDelete(id)}
          >
            D
          </button>
        )}
      </div>
    </div>
  );
};
