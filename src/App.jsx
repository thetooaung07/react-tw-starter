import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";
import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";
import {
  createNewEntry,
  deleteEntry,
  getAllEntry,
  getEntryById,
  updateExistingEntry,
} from "./service";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("pokemon.json").then((res) => res.json());
      setData(res.slice(0, 10));
    };
    fetchData();

    //
    getAllEntry();
    getEntryById();
    createNewEntry();
    updateExistingEntry();
    deleteEntry();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/details" element={<DetailsPage></DetailsPage>}></Route>
    </Routes>
  );
}

export default App;

/* 


 <div className="pt-4 w-screen mx-auto flex justify-center items-center">
      {data && (
        <div className="grid grid-cols-3 gap-4">
          {data.map((el, index) => {
            return (
              <PokemonCard
                key={index}
                name={el.name}
                types={el.type}
                hp={el.hp}
              />
            );
          })}
        </div>
      )}
    </div>
*/
