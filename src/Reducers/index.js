import { combineReducers } from 'redux';
import filter from './Filter';
import pets from './Pet';

export default combineReducers({
  pets,
  filter,
});
