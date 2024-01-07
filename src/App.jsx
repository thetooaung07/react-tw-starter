import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminPage } from "./pages/AdminPage";
import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";
import { InstructorPage } from "./pages/InstructorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route
        path="/details/student/:id"
        element={<DetailsPage></DetailsPage>}
      ></Route>
      <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      <Route
        path="/instructor"
        element={<InstructorPage></InstructorPage>}
      ></Route>
    </Routes>
  );
}

export default App;
