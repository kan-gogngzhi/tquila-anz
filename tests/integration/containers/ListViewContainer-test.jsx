import React from 'react';
import { shallow } from 'enzyme';
import { ListView } from 'components';
import { ListViewContainer } from 'containers';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('<ListViewContainer />', () => {
  it('renders <ListView/ >', () => {
    const wrapper = shallow(<ListViewContainer />);
    expect(wrapper.find(ListView)).to.have.length(1);
  });
});
