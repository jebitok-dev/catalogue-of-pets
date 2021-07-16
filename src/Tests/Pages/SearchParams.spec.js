import React from 'react';
import renderer from 'react-test-renderer';
import SearchParams from '../../Containers/SearchParams';

test('should correctly render SearchParams', () => {
  const component = renderer.create(<SearchParams />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
