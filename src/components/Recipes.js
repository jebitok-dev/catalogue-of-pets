import React from 'react';
/* eslint-disable */
const Recipes = (name, meal, type, media, id) => {
  let data = '';

  return (
    <div>
      <h2>Recipes</h2>
      <div className="image-container">
        <img src={data} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${meal} - ${type}` }</h2>
      </div>
    </div>
  );
};

export default Recipes;
