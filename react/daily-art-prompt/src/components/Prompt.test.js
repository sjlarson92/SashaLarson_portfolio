import React from 'react';
import Prompt from './Prompt.js'
import { shallow } from 'enzyme';

describe('<Prompt>', () => {
  describe('<div> for currentPromptDate', () => {
    it('renders correct initial text', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      const currentPromptDate = wrapper.find({testID:'currentPromptDate'}).text();
      expect(currentPromptDate).toEqual('October 11')
    })

    describe('when there are no previous prompts', () => {
      it('does not change the text onClick of previous button', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        wrapper.find({testID:'previousButton'}).simulate('click');
        expect(wrapper.find({testID:'currentPromptDate'}).text()).toEqual('October 11')
      })
    })

    describe('when there is a previous prompt', () => {
      it('renders correct text onclick of previous button',() => {
        const wrapper = shallow(<DailyArtPromptApp />);
        wrapper.setState({currentPrompt: {id: 3 }})
        wrapper.find({testID:'previousButton'}).simulate('click');
        expect(wrapper.find({testID:'currentPromptDate'}).text()).toEqual('October 12')
      })
    })

    describe('when there is no next prompt', () => {
      it('does not change the text onClick for next button', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        wrapper.setState({currentPrompt: {id: 3, date: "October 13", text: "Birds"} })
        const testDate = wrapper.state('currentPrompt').date;
        wrapper.find({testID:'nextButton'}).simulate('click');
        expect(wrapper.state('currentPrompt').date).toEqual(testDate)
      })
    })

    describe('when there is a next prompt', () => {
      it('renders the correct text onClick for next button', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        const testDate = wrapper.state('currentPrompt').date;
        wrapper.find({testID:'nextButton'}).simulate('click');
        expect(wrapper.state('currentPrompt').date).not.toEqual(testDate)
      })
    })
  })

  describe('<div> for currentPromptId', () => {
    it('renders the correct intial text', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      const currentPromptId = wrapper.find({testID:'currentPromptId'}).text();
      expect(currentPromptId).toEqual('Prompt #1')
    })

    describe('when there is no previous prompt', () => {
      it('renders the same text for onClick of previous button', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        const currentPromptId = wrapper.state('currentPrompt').id;
        wrapper.find({testID:'previousButton'}).simulate('click')
        expect(wrapper.state('currentPrompt').id).toEqual(currentPromptId);

      })
    })

    describe('when there is a previous prompt', () => {
      it('render the correct text onClick for previous button', () => {
        const wrapper = shallow(<DailyArtPromptApp />)
        wrapper.setState({currentPrompt: {id: 3, date: "October 13", text: "Birds"}})
        const currentId = wrapper.state('currentPrompt').id;
        wrapper.find({testID:'previousButton'}).simulate('click')
        expect(wrapper.state('currentPrompt').id).not.toEqual(currentId)
      })
    })

    describe('when there is no next prompt', () => {
      it('renders correct text onClick for next button', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        wrapper.setState({currentPrompt :{id: 3, date: "October 13", text: "Birds"}});
        const testPromptid = wrapper.state('currentPrompt').id;
        wrapper.find({testID:'nextButton'}).simulate('click')
        expect(wrapper.state('currentPrompt').id).toEqual(testPromptid)
      })
    })

    describe('when there is a next prompt', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      const testPromptid = wrapper.state('currentPrompt').id; wrapper.find({testID:'nextButton'}).simulate('click')
      expect(wrapper.state('currentPrompt').id).not.toEqual(testPromptid)
    })
  })

  describe('<div> for currentPrompt.text', () => {
    it('renders the correct initial value', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      const currentPromptText = wrapper.find({testID: 'currentPromptText'}).text()
      expect(currentPromptText).toEqual('Puppy')
    })

    describe('when there are no previous prompts', () => {
      it('does not change prompt.text onClick of the previous button',() => {
        const wrapper = shallow(<DailyArtPromptApp />);
        wrapper.find({testID: 'previousButton'}).simulate('click')
        const currentPromptText = wrapper.find({testID:'currentPromptText'}).text();
        expect(currentPromptText).toEqual('Puppy');
      })
    })

    describe('when there are previous prompts', () => {
      it('renders the correct (previous) prompt onClick of the previous button', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        wrapper.setState({currentPrompt: {id: 3 }})
        wrapper.find({testID: 'previousButton'}).simulate('click')

        const currentPromptText = wrapper.find({testID: 'currentPromptText'}).text()
        expect(currentPromptText).toEqual('Kitten')
      })
    })

    describe('when there is a next prompt', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      const currentPromptText = wrapper.find({testID:'currentPromptText'}).text();
      wrapper.find({testID:'nextButton'}).simulate('click')
      expect(wrapper.find({testID:'currentPromptText'}).text()).not.toEqual(currentPromptText)
    })

    describe('when there is no next prompt', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      wrapper.setState({currentPrompt: {id: 3, date: "October 13", text: "Birds"}})
      const currentText = wrapper.state('currentPrompt').text;
      wrapper.find({testID: 'nextButton'}).simulate('click')
      expect(wrapper.state('currentPrompt').text).toEqual(currentText)
    })
  })

})