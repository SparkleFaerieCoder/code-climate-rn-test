import React from 'react';
import renderer from 'react-test-renderer';
import TabOneScreen from '../TabOneScreen';

test('renders correctly', () => {
  const tree = renderer.create(<TabOneScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});