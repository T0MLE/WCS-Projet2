import { useEffect, useState } from "react";
import "./App.scss";
import NutritionSlide from "./components/NutritionSlide";

function App() {
  const [nutrition, setNutrition] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/data")
      .then((response) => response.json())
      .then((result) => {
        setNutrition(result.slice(0, 10));
      })
      .catch((error) => console.error(error));
    // const data = async ( ) =>
    // fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    //   .then((response) => response.text())
    //   .then((data) => console.warn(data))
    //   .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <div>
        {console.warn("data", nutrition)}
        <NutritionSlide data={nutrition} />
      </div>
    </div>
  );
}

export default App;

/* import React, { useState, useEffect } from "react";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const urls = alphabet
      .split("")
      .map(
        (letter) =>
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      );
    const requests = urls.map((url) => fetch(url));
    Promise.all(requests)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        const allMeals = data.map((obj) => obj.meals).flat();
        setMeals(allMeals);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Meals:</h1>
      <pre>{JSON.stringify(meals, null, 2)}</pre>
    </div>
  );
}

export default App; */
