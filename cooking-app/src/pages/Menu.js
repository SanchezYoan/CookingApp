import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Menu = () => {
  const [cookData, setCookData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const origin = [
    "American",
    "Turkish",
    "Indian",
    "Italian",
    "Dutch",
    "Egyptian",
    "Greek",
    "Chinese",
    "British",
    "Canadian",
  ];

  //   const searchIngredient = () => {
  //     cookData.map((cook) => {
  //       //   for (i = 0; i < 20; i++) {
  //       //     console.log(cook.strIngredient + { i });
  //       //   }
  //       console.log("INGREDIENT" + cook.strIngredient1);
  //     });
  //   };
  //   searchIngredient();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setCookData(res.data.meals));
  }, []);

  return (
    <div className="cook-container">
      <ul className="radio">
        {origin.map((cook) => (
          <li key={cook}>
            <input
              type="radio"
              id={cook}
              name="cookRadio"
              checked={cook === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={cook}>{cook}</label>
          </li>
        ))}
      </ul>
      <div className="search-container">
        <input
          id="search"
          type="text"
          placeholder="Tapez un ingrédient"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <ul className="meal-card">
        {cookData
          .filter(
            (cook) =>
              cook.strArea.includes(selectedRadio) &&
              cook.strIngredient1.includes(search)
          )
          .map((cook, index) => (
            <Card cookdata={cook} key={index} />
          ))}
      </ul>
    </div>
  );
};

export default Menu;
