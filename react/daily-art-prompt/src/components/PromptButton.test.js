import React from 'react';
import { shallow } from 'enzyme';

import PromptButton from './PromptButton'

const defaultProps = {
  text: "hello",
  onClick: jest.fn()
}

describe('<PromptButton />', () => {
  it('should display correct text',() => {
    const wrapper = shallow(<PromptButton text={"hi"}  />)
    expect(wrapper.find('button').text()).toEqual("hi")
  })

  //!!Don't do this!
  it('should display correct text', () => {
    const wrapper = shallow(<PromptButton text={defaultProps.text} onClick={defaultProps.onClick}/>)
    expect(wrapper.find('button').text()).toEqual("hello")
  })

  // Common practice
  it('should display correct text', () => {
    const wrapper = shallow(<PromptButton {...defaultProps}/>)
    expect(wrapper.find('button').text()).toEqual("hello")
  })

  it('should call prop onClick when clicked', () => {
    const wrapper = shallow(<PromptButton {...defaultProps}/>)
    wrapper.find('button').simulate('click')
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})
