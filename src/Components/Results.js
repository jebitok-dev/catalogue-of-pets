import PropTypes from 'prop-types';
import Pets from './Pets';

const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1 className="space">No Pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pets
          id={pet.id}
          name={pet.name}
          key={pet.id}
          media={pet.photos}
        />
      ))
    )}
  </div>
);

Results.propTypes = {
    pets: PropTypes.array,  // eslint-disable-line
};

Results.defaultProps = {
  pets: [],
};

export default Results;
