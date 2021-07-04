import { Router, Link } from '@reach/router';
import Pets from './Pets';
import Details from './Details';
import SearchParams from './SearchParams';

const App = () => (
  <div>
    <h1>
      <Link to="/">
        Adopt Pets!
      </Link>
    </h1>
    <Router>
      <SearchParams path="/" />
      <Details path="/details/:id" />
    </Router>
    <Pets />
  </div>
);

export default App;
