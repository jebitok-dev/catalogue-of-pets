const filterAnimal = (state = 'All', action) => {
  if (action.type === 'FILTER_ANIMAL') {
    return { state, type: action.payload.type };
  }

  if (action.type === 'FILTER_BREED') {
    return { state, breed: action.payload.gender };
  }

  return state;
};

export default filterAnimal;
