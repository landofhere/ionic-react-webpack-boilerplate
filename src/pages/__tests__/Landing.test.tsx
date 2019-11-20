import React from 'react';
import renderer from 'react-test-renderer';
import { Landing } from '../landing';

describe('Landing', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Landing />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});