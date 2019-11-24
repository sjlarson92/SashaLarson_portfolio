import React from 'react';
import { PromptLayout, mapStateToProps, mapDispatchToProps } from './PromptLayout.js'
import { shallow } from 'enzyme';
import * as TYPES from '../store/actions'

describe('<PromptLayout>', () => {

  const defaultProps = {
    index: 0,
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
    })

    describe('<Prompt>', () => {
      it('should render correct initial prompt', () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        expect(wrapper.find('Prompt').prop('prompt')).toEqual({ id: 1, date: "October 11", text: "Puppy" })
      })

      describe('Previous Button', () => {
        it('should call handlePreviousButtonClick with correct params', () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />);
          wrapper.find({ 'data-testid': 'previousButton' }).simulate('click')
          expect(defaultProps.handlePreviousButtonClick).toHaveBeenCalledWith(defaultProps.index)
        })
      })

      describe('Next Button', () => {
        it('should call handleNextButtonClick with correct params', () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />);
          wrapper.find({ 'data-testid': 'nextButton' }).simulate('click')
          expect(defaultProps.handleNextButtonClick).toHaveBeenCalledWith(defaultProps.index)
        })
      })
    })

    describe('<button> for nextButton', () => {
      it('renders correct text', () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        expect(wrapper.find({ 'data-testid': 'nextButton' }).prop('text')).toEqual('Next');
      })
    })
  })
})

describe('mapStateToProps', () => {
  it('should map index to props', () => {
    const result = mapStateToProps({ index: 1 })
    expect(result).toEqual({ index: 1 })
  })
})

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn()
  describe('handleNextButtonClick', () => {
    it('should dispatch type: UPDATE_NEXT_INDEX and correct payload ', () => {
      mapDispatchToProps(dispatch).handleNextButtonClick(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.UPDATE_NEXT_INDEX,
        payload: { index: 1 }
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


