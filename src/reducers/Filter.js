const Filter = (state = 'All', action) => {
  if (action.type === 'FILTER_LOCATION') {
    return { state, type: action.payload.location };
  }

  if (action.type === 'FILTER_BREED') {
    return { state, breed: action.payload.breed };
  }

  if (action.type === 'FILTER_TYPE') {
    return { state, type: action.payload.animal };
  }

  return state;
};

export default Filter;
