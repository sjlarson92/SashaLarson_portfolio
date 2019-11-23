import React from 'react';
import Prompt from './Prompt.js'
import { shallow } from 'enzyme';

const defaultProps = {
  prompt: {
    date: "November 2",
    id: 1,
    text: "Hi"
  },
  onClick: jest.fn(),
  somethingElse: 2,
  antherTHing: 'a'
}

describe('<Prompt>', () => {
  // const wrapper = shallow(<Prompt {...defaultProps}/>)
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Prompt {...defaultProps} />)
  })

  it('should render correct date from prompt', () => {
    expect(wrapper.find({ 'data-testid': 'promptDate' }).text()).toEqual(defaultProps.prompt.date)
  })

  // it('should render COOL DATE when prompt does not have a date', () => {
  //   const newProps = {
  //     prompt: {
  //       date: undefined,
  //       id: 2,
  //       text: 'something'
  //     }
  //   }
  //   wrapper = shallow(<Prompt {...newProps}/>)
  //   expect(wrapper.find({testID:'promptDate'}).text()).toEqual('COOL DATE')
  // })
  //
  // // different way to overwrite props
  // it('should render COOL DATE when prompt does not have a date', () => {
  //   wrapper = shallow(<Prompt {...defaultProps} prompt={{...defaultProps.prompt, date: undefined}} />)
  //   expect(wrapper.find({testID:'promptDate'}).text()).toEqual('COOL DATE')
  // })

  it('should render correct id from prompt', () => {
    expect(wrapper.find({ 'data-testid': 'promptId' }).text()).toEqual(`Prompt #${defaultProps.prompt.id}`)
  })

  it('should render correct text from prompt', () => {
    expect(wrapper.find({ 'data-testid': 'promptText' }).text()).toEqual(defaultProps.prompt.text)
  })
})
