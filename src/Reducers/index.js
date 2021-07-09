import { combineReducers } from 'redux';
import filterPets from './Filter';
import pets from './Pet';

export default combineReducers({
  pets,
  filterPets,
});
