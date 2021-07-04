import { combineReducers } from 'redux';
import pets from './Pet';
import Filter from './Filter';

export default combineReducers({
  pets,
  Filter,
});
