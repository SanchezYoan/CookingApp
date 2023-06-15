import React from "react";

const Card = ({ cookdata }) => {
  const data = {
    title: cookdata.strMeal,
    origin: cookdata.strArea,
    img: cookdata.strMealThumb,
    instructions: cookdata.strInstructions,
  };
  return (
    <li>
      <h2>{data.title}</h2>
      <h5>Origin : {data.origin}</h5>
      <img src={data.img} alt={data.title} />
      <p>{data.instructions}</p>
    </li>
  );
};

export default Card;
