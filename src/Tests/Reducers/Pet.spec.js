import Pet from '../../Reducers/Pet';

const pets = [
  {
    gender: 'Female',
    id: 1,
    name: 'Legacy',
    type: 'Horse',
  },
];

test('should set empety array by default', () => {
  const state = Pet(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add pets to state', () => {
  const action = {
    type: 'ADD_PETS',
    payload: {
      pets,
    },
  };
  const state = Pet(undefined, action);
  expect(state).toEqual([...pets]);
});
