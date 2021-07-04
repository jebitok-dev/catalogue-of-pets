import { connect } from 'react-redux';
import {
  fetchPets,
  filterAnimal,
  filterBreed,
} from '../actions/index';
import SearchParams from '../components/SearchParams';

const mapStateToProps = (state) => ({
  pets: state.pets,
  filter: state.filter.animal,
  breed: state.filter.breed,
});

const mapStateToDispatch = (dispatch) => ({
  fetchPets: (animals) => dispatch(fetchPets(animals)),
  filterPets: (animal) => dispatch(filterAnimal(animal)),
  filterBreed: (breed) => dispatch(filterBreed(breed)),
});

export default connect(mapStateToProps, mapStateToDispatch)(SearchParams);
