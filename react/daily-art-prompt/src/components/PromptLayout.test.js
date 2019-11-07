import React from 'react';
import { PromptLayout } from './PromptLayout.js'
import { shallow } from 'enzyme';

describe('<PromptLayout>', () => {

  const defaultProps = {
    prompts: [
      { id: 1, date: "October 11", text: "Puppy" },
      { id: 2, date: "October 12", text: "Kitten" },
      { id: 3, date: "October 13", text: "Birds" }
    ]
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

      describe('when no previous prompts', () => {
        it('should not change prompt on previous buttonClick', () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />);
          wrapper.find({ 'data-testid': 'previousButton' }).simulate('click')
          expect(wrapper.find('Prompt').prop('prompt')).toEqual(
            {
              id: 1,
              date: "October 11",
              text: "Puppy"
            }
          )
        })
      })

      describe('when there are previous prompts', () => {
        it('should render previous prompt on previous buttonClick', () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />);
          wrapper.find({ 'data-testid': 'nextButton' }).simulate('click');
          wrapper.find({ 'data-testid': 'nextButton' }).simulate('click');
          wrapper.find({ 'data-testid': 'previousButton' }).simulate('click');
          expect(wrapper.find('Prompt').prop('prompt')).toEqual(
            {
              id: 2,
              date: "October 12",
              text: "Kitten"
            }
          )
        })
      })

      describe('when there are no next prompts', () => {
        it('should not change the prompt on nextButton click', () => {
          const wrapper = shallow(<PromptLayout />);
          wrapper.find({ testID: 'nextButton' }).simulate('click');
          wrapper.find({ testID: 'nextButton' }).simulate('click');
          wrapper.find({ testID: 'nextButton' }).simulate('click');
          expect(wrapper.find('Prompt').prop('prompt')).toEqual(
            {
              id: 3,
              date: "October 13",
              text: "Birds"
            }
          )
        })
      })

      describe('when there is a next prompt', () => {
        it('should change prompt when nextButton is clicked', () => {
          const wrapper = shallow(<PromptLayout />);
          wrapper.find({ testID: 'nextButton' }).simulate('click');
          expect(wrapper.find('Prompt').prop('prompt')).toEqual(
            {
              id: 2,
              date: "October 12",
              text: "Kitten"
            }
          )
        })
      })
    })

    describe('<button> for nextButton', () => {
      it('renders correct text', () => {
        const wrapper = shallow(<PromptLayout />);
        expect(wrapper.find({ testID: 'nextButton' }).prop('text')).toEqual('Next');
      })
    })
  })
})
