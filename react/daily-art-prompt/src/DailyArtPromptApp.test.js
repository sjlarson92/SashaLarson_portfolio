import React from 'react';
import DailyArtPromptApp from './DailyArtPromptApp.js'
import beachPuppy from './images/beach-puppy.jpg';

import { shallow } from 'enzyme';

describe('<DailyArtPromptApp>', () => {
  //Bad practice of testing, do not do this!
  // describe('findPromptbyId', () => {
  //   it('returns a prompt obj when given a promptId', () => {
  //     const wrapper = shallow(<DailyArtPromptApp />);
  //     const instance = wrapper.instance();
  //     const result = instance.findPromptbyId(1);
  //     expect(result).toEqual({id: 1, date: "October 11", text: "Puppy"})
  //   })
  // })
  //
  // describe('findImagebyId', () => {
  //   it('returns an img obj when given an imageId', () => {
  //     const wrapper = shallow(<DailyArtPromptApp />);
  //     const instance = wrapper.instance();
  //     const result = instance.findImagebyId(1);
  //     expect(result).toEqual({
  //       id: 1,
  //       promptId: 1,
  //       src: beachPuppy,
  //       name: 'beachPuppy',
  //       liked: false
  //     })
  //   })
  // })
  //
  // describe('handleButtonClick', () => {
  //   it('console.log with correct params when currentPrompt.id (in state) is 1 and num is -1', () => {
  //     console.log = jest.fn()
  //     const wrapper = shallow(<DailyArtPromptApp />);
  //     wrapper.setState({currentPrompt: { id: 1}})
  //     wrapper.instance().handleButtonClick(-1);
  //     expect(console.log).toHaveBeenCalledWith("There are no previous prompts")
  //   })
  //
  //   it('returns nothing', () => {
  //     const wrapper = shallow(<DailyArtPromptApp />);
  //     wrapper.setState({currentPrompt: { id: 1}})
  //     const result = wrapper.instance().handleButtonClick(-1);
  //     expect(result).toEqual()
  //   })
  //
  //   it('sets currentPrompt in state properly when newCurrentPrompt is defined', () => {
  //     const wrapper = shallow(<DailyArtPromptApp />);
  //     wrapper.instance().handleButtonClick(2)
  //     // wrapper.setState({currentPrompt: { id: 1}})
  //     // const result = wrapper.instance().handleButtonClick(-1);
  //     expect(wrapper.state().currentPrompt).toEqual({"date": "October 12", "id": 2, "text": "Kitten"})
  //   })
  // })
  //
  // describe('previous button', () => {
  //   it('calls handleButtonClick with correct params onClick', () => {
  //     const wrapper = shallow(<DailyArtPromptApp />);
  //     wrapper.instance().handleButtonClick = jest.fn();
  //     wrapper.find({testID: 'previousButton'}).simulate('click')
  //     expect(wrapper.instance().handleButtonClick).toHaveBeenCalledWith(-1)
  //   })
  // })
  //
  // describe('next button', () => {
  //   it('calls handleButtonClick with correct params onClick', () => {
  //     const wrapper = shallow(<DailyArtPromptApp />);
  //     wrapper.instance().handleButtonClick = jest.fn();
  //     wrapper.find({testID: 'nextButton'}).simulate('click')
  //     expect(wrapper.instance().handleButtonClick).toHaveBeenCalledWith()
  //   })
  // })

  // Lucas's 'unit component test = aka static component test' Proper testing methods:
  describe('<div> for app',() => {

    describe('header', () => {
      it('renders with the correct text', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        expect(wrapper.find({ testID: 'header' }).text()).toEqual('Daily Art Prompt')
      })

      it('is red', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        expect(wrapper.find({ testID: 'header' }).prop('style')).toEqual({color: 'red'})
      })
    })

    describe('<PromptLayout>', () => {
      it('has the correct initial currentPrompt prop', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        // wrapper.find('PromptLayout').props().currentPrompt
        expect(wrapper.find('PromptLayout').prop('currentPrompt')).toEqual(wrapper.state('currentPrompt'))
      })

      it('should pass handleButtonClick method to component',() => {

      })
    })

    describe('<div> header for Art Gallery', () => {
      it('should render header text', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        const result = wrapper.find({testID:'artGalleryHeader'}).text()
        expect(result).toEqual('Art Gallery')
      })
    })

    describe('<ImageLayout>', () => {
      it ('should render images from data', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        const result = wrapper.find({testID:'imagesArray'});
        expect(result).toHaveLength(3)
      })

      it('should pass method for onDoubleClick()',() => {

      })

      it('should pass obj to component', () => {

      })
    })
  })
})
