import PropTypes from "prop-types";
import React, { useState } from "react";

export const EditInput = ({
  editMode,
  name,
  setName,
  handleUpdate,
  placeholder,
  isNumber = false,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <input
        className="w-full disabled:bg-transparent -z-10"
        placeholder={placeholder}
        type={isNumber ? "number" : "text"}
        disabled={!editMode}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </form>
  );
};
