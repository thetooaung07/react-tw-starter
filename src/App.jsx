import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Card } from "./components/Card";
import { AdminPage } from "./pages/AdminPage";
import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";
import { InstructorPage } from "./pages/InstructorPage";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("pokemon.json").then((res) => res.json());
      setData(res.slice(0, 10));
    };
    fetchData();

    //
    // getAllEntry();
    // getEntryById();
    // createNewEntry();
    // updateExistingEntry();
    // deleteEntry();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/details" element={<DetailsPage></DetailsPage>}></Route>
      <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      <Route path="/instructor" element={<InstructorPage></InstructorPage>}></Route>
    </Routes>
  );
}

export default App;