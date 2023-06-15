import React from "react";

const Card = ({ cookdata }) => {
  const data = {
    title: cookdata.strMeal,
    origin: cookdata.strArea,
    img: cookdata.strMealThumb,
  };
  return (
    <li>
      <h2>{data.title}</h2>
      <h3>{data.origin}</h3>
      <img src={data.img} alt={data.title} />
    </li>
  );
};

export default Card;
