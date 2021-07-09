import { combineReducers } from 'redux';
import filterPet from './Filter';
import pets from './Pet';

export default combineReducers({
  pets,
  filterPet,
});
