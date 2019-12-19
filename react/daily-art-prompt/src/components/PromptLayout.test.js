import React from 'react';
import { PromptLayout, mapStateToProps, mapDispatchToProps } from './PromptLayout.js'
import { shallow } from 'enzyme';
import * as TYPES from '../store/actions'

describe('<PromptLayout>', () => {

  const defaultProps = {
    prompts: [
      {
        id: 1,
        date: '11-15-19',
        text: 'this is text for defaultProps.prompts'
      },
      {
        id: 2,
        date: '12-18-19',
        text: 'i love testing my code'
      }
    ],
    index: 1,
    handleNextButtonClick: jest.fn(),
    handlePreviousButtonClick: jest.fn()
  }
  describe('<div> for mainContentContainer', () => {
    it('should have a prompt-row className', () => {
      const wrapper = shallow(<PromptLayout {...defaultProps} />);
      const result = wrapper.find({ 'data-testid': 'mainContentContainer' }).props().className;
      expect(result).toEqual('prompt-row');
    })

    describe('<button> for previousButton', () => {
      it('renders correct text', () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        expect(wrapper.find({ 'data-testid': 'previousButton' }).prop('text')).toEqual('Previous');
      })
      it('should call handlePreviousButtonClick with correct params', () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        wrapper.find({ 'data-testid': 'previousButton' }).simulate('click')
        expect(defaultProps.handlePreviousButtonClick).toHaveBeenCalledWith(defaultProps.index)
      })
    })

    describe('<Prompt>', () => {
      describe('when prompts.length is greater than 0', () => {
        it('should render', () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />);
          const result = wrapper.find({ 'data-testid': 'prompt' })
          expect(result).toHaveLength(1)
        })
        it('should render with correct prompt prop', () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />)
          const result = wrapper.find({ 'data-testid': 'prompt' }).prop('prompt')
          expect(result).toEqual(defaultProps.prompts[defaultProps.index])
        })
      })

      describe('when prompts.length is 0', () => {
        it('should not render  <Prompt>', () => {
          const props = {
            ...defaultProps,
            prompts: []
          }
          const wrapper = shallow(<PromptLayout {...props} />)
          const result = wrapper.find({ 'data-testid': 'prompt' })
          expect(result).toHaveLength(0)
        })
      })
    })


    describe('<button> for nextButton', () => {
      it('renders correct text', () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        expect(wrapper.find({ 'data-testid': 'nextButton' }).prop('text')).toEqual('Next');
      })
      it('should call handleNextButtonClick with correct params', () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        wrapper.find({ 'data-testid': 'nextButton' }).simulate('click')
        expect(defaultProps.handleNextButtonClick).toHaveBeenCalledWith(defaultProps.index, defaultProps.prompts.length)
      })
    })
  })
})

describe('mapStateToProps', () => {
  it('should map index to props', () => {
    const result = mapStateToProps({ index: 1 })
    expect(result).toEqual({ index: 1 })
  })
  it('should map prompts to props', () => {
    const result = mapStateToProps({ prompts: [{ text: 'prompt' }] })
    expect(result).toEqual({ prompts: [{ text: 'prompt' }] })
  })

})

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn()
  describe('handleNextButtonClick', () => {
    it('should dispatch type: UPDATE_NEXT_INDEX and correct payload ', () => {
      const index = 0
      const promptslength = 1
      mapDispatchToProps(dispatch).handleNextButtonClick(index, promptslength)
      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.UPDATE_NEXT_INDEX,
        payload: {
          index,
          promptslength
        }
      })
    })
  })

  describe('handlePreviousButtonClick', () => {
    it('should dispatch type: UPDATE_PREVIOUS_INDEX and correct payload ', () => {
      mapDispatchToProps(dispatch).handlePreviousButtonClick(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.UPDATE_PREVIOUS_INDEX,
        payload: { index: 1 }
      })
    })

  })



})


