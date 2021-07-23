import filter from '../../Reducers/Filter';

let defaultState;

beforeEach(() => {
  defaultState = 'All';
});

test('should return filter reducer', () => {
  const state = filter(undefined, { type: '@@INT' });
  expect(state).toEqual(defaultState);
});

test('should set breed', () => {
  const breed = 'Bird';
  const action = {
    type: 'FILTER_PETS',
    payload: {
      breed,
    },
  };
  const state = filter(undefined, action);
  expect(state.breed).toEqual(breed);
});

test('should set size', () => {
  const size = 'Small';
  const action = {
    type: 'FILTER_SIZE',
    payload: {
      size,
    },
  };
  const state = filter(undefined, action);
  expect(state.size).toEqual(size);
});

test('should set gender', () => {
  const gender = 'Small';
  const action = {
    type: 'FILTER_GENDER',
    payload: {
      gender,
    },
  };
  const state = filter(undefined, action);
  expect(state.gender).toEqual(gender);
});
