import React from 'react';
import renderer from 'react-test-renderer';
import ModalScreen from '../ModalScreen';

test('renders correctly', () => {
  const tree = renderer.create(<ModalScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});