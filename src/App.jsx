import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/HomePage";
import { InstructorPage } from "./pages/InstructorPage";
import { StudentDetailsPage } from "./pages/StudentDetailsPage";
import { InstructorDetailsPage } from "./pages/InstructorDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      <Route
        path="/details/student/:id"
        element={<StudentDetailsPage></StudentDetailsPage>}
      ></Route>

      <Route
        path="/details/instructor/:id"
        element={<InstructorDetailsPage></InstructorDetailsPage>}
      ></Route>
      <Route
        path="/instructor"
        element={<InstructorPage></InstructorPage>}
      ></Route>
    </Routes>
  );
}

export default App;
