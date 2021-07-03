import React, { useState, useEffect } from 'react';
import recipe, { RECIPES } from '@instant-api/recipe-book';

const SearchParams = () => {
  const [type, updateType] = useState([]);
  const [recipes, setRecipes] = useState([]);

  async function requestPets() {
    const { meals } = await recipe.meals({
      type,
    });

    setRecipes(meals || []);
  }

  useEffect(() => {
    update;
  });
};

export default SearchParams;
