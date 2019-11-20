import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Landing } from '../landing';

describe('Landing', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Landing />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the title Landing', () => {
    const wrapper = mount(<Landing />);
    expect(wrapper.find('IonTitle').text()).toEqual('Landing');
  });
});
