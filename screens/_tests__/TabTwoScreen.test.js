import React from 'react';
import renderer from 'react-test-renderer';
import TabTwoScreen from '../TabTwoScreen';

test('renders correctly', () => {
  const tree = renderer.create(<TabTwoScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});