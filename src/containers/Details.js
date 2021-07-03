/* eslint-disable */
import PropTypes from 'prop-types';
import recipe from '@instant-api/recipe-book';
import { render } from '@testing-library/react';
import React from 'react';

class Details extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    recipe.meal(this.props.id)
      .then(({ meal }) => {
        this.setState({
          name: MediaList.name,
          meal: meal.type,
          media: media.photos,
          type: type.name,
          description: meal.description,
          loading: false,
        });
      }).catch((err) => this.setState({ error: err }));
  }

  render() {
    if (this.state.loading) {
      return <h1>Please wait...</h1>;
    }
    /* eslint-enable */
    const [
      meal, type, description, name,
    ] = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${meal} - ${type}`}</h2>
          <button
            type="button"
          >
            Read
            {name}
            <p>{description}</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Details;
