import React from 'react';
import DailyArtPromptApp from './DailyArtPromptApp.js'
import { shallow } from 'enzyme';

describe('<DailyArtPromptApp>', () => {
  it('exists', () => {
  const wrapper = shallow(<DailyArtPromptApp />);
  expect(wrapper).toHaveLength(1);
  });

})

describe('findPromptbyId', () => {
  it('returns a prompt obj when given a promptId', () => {
    const wrapper = shallow(<DailyArtPromptApp />);
    const instance = wrapper.instance();
    const result = instance.findPromptbyId(1);
    expect(result).toEqual({id: 1, date: "October 11", text: "Puppy"})
  })
})

describe('findImagebyId', () => {
  it('returns and img obj when given an imageId', () => {
    const wrapper = shallow(<DailyArtPromptApp />);
    const instance = wrapper.instance();
    const result = instance.findImagebyId(1);
    expect(result).toEqual({
      id: 1,
      promptId: 1,
      src: beachPuppy,
      name: 'beachPuppy',
      liked: false
    })
  })
})
