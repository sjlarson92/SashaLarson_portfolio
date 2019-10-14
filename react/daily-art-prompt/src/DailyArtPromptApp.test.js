import React from 'react';
import DailyArtPromptApp from './DailyArtPromptApp.js'
import { shallow } from 'enzyme';

describe('<DailyArtPromptApp>', () => {
  it('exists', () => {
  const wrapper = shallow(<DailyArtPromptApp />);
  expect(wrapper).toHaveLength(1);
  });
})
