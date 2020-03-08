import React from 'react';
import {App, add} from './App';
import {shallow} from 'enzyme';

// Unit test
// usually will test a pure function
// meant to test a UNIT (only one thing)
describe('add', () => {
  it('returns the sum of two positive variables given', () => {
      const result = add(1, 2);
      expect(result).toEqual(3)
  })
  it('returns the sum of two negative values given', () => {
    const result = add(-1, -5)
    expect(result).toEqual(-6);
  });
  it('return undefined when given 2 strings', () => {
    const result = add('lucas', 'sasha')
    expect(result).toEqual(undefined);
  })
})

describe('<App>', () => {
  it('renders Hi' ,() => {
    const wrapper = shallow(<App />);
    const something = wrapper.find('p')
    console.log(something)
    expect(something.childAt(0).text).toEqual('Hi')
  })
})
