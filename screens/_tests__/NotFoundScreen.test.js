import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundScreen from '../NotFoundScreen';

test('renders correctly', () => {
  const tree = renderer.create(<NotFoundScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});