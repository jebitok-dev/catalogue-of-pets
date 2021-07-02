import React from 'react';

const Recipes = (recipe, meal, letter, media, id) => {
  let data = '';
  if (media.length) {
    data = media[0].small;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <div className="image-container">
        <img src={data} alt={meal} />
      </div>
      <div className="info">
        <h1>{meal}</h1>
        <h2>{`${recipe} - ${letter}` }</h2>
      </div>
    </div>
  );
};

export default Recipes;
