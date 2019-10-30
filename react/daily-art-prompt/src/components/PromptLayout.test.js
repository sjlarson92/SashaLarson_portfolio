import React from 'react';
import PromptLayout from './PromptLayout.js'
import { shallow } from 'enzyme';

import beachPuppy from '../images/beach-puppy.jpg';
import beagle from '../images/beagle.jpg';

describe ('<PromptLayout>', () => {

  describe('<div> for mainContentContainer',() => {
    it('should have a prompt-row className',() => {
      const wrapper = shallow(<PromptLayout />);
      const result = wrapper.find({testID:'mainContentContainer'}).props().className;
      expect(result).toEqual('prompt-row');
    })

    describe('<button> for previousButton', () => {
      it('renders correct text', () => {
        const wrapper = shallow(<PromptLayout />);
        expect(wrapper.find({testID:'previousButton'}).prop('text')).toEqual('Previous');
      })
    })

    describe('<Prompt>', () => {
      it('should render correct initial prompt', () => {
        const wrapper = shallow(<PromptLayout />);
        expect(wrapper.find('Prompt').prop('currentPrompt')).toEqual({id: 1, date: "October 11", text: "Puppy"})
      })

      describe('when no previous prompts', () => {
        it('should not change currentPrompt on previous buttonClick',() => {
          const wrapper = shallow(<PromptLayout />);
          const result = wrapper.find('Prompt').prop('currentPrompt');
          wrapper.find({testID:'previousButton'}).simulate('click')
          expect(wrapper.find('Prompt').prop('currentPrompt')).toEqual(result)
        })
      })

      describe('there are previous prompts', () => {
        it('should change currentPrompt on previous buttonClick',() => {
          const wrapper = shallow(<PromptLayout />);
          wrapper.setState({currentPrompt: {
              id: 2,
              date: "October 12",
              text: "Kitten"
            }
          })
          wrapper.find({testID: 'previousButton'}).simulate('click');
          expect(wrapper.find('Prompt').prop('currentPrompt')).toEqual(
            {
              id: 1,
              date: "October 11",
              text: "Puppy"
            }
          )
        })
      })

      describe('when there are no next prompts', () => {
        it('should not change the currentPrompt on nextButton click', () => {
          const wrapper = shallow(<PromptLayout />);
          wrapper.setState({currentPrompt: {
            id: 3,
            date: "October 13",
            text: "Birds"
            }
          })
          wrapper.find({testID:'nextButton'}).simulate('click');
          expect(wrapper.find('Prompt').prop('currentPrompt')).toEqual(
            {
              id: 3,
              date: "October 13",
              text: "Birds"
            }
          )
        })
      })

      describe('when there is a next prompt', () => {
        it('should change currentPrompt when nextButton is clicked', () => {
          const wrapper = shallow(<PromptLayout />);
          wrapper.setState({currentPrompt: {
              id: 2,
              date: "October 12",
              text: "Kitten"
            }
          })
          wrapper.find({testID: 'nextButton'}).simulate('click');
          expect(wrapper.find('Prompt').prop('currentPrompt')).toEqual(
            {
              id: 3,
              date: "October 13",
              text: "Birds"
            }
          )
        })
      })
    })

    describe('<button> for nextButton', () => {
      it('renders correct text', () => {
        const wrapper = shallow(<PromptLayout />);
        expect(wrapper.find({testID:'nextButton'}).prop('text')).toEqual('Next');
      })
    })
  })
})
