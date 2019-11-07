import React from 'react';
import { DailyArtPromptApp } from './DailyArtPromptApp.js'
import { shallow } from 'enzyme';

const defaultProps = {
  promptsImages: [
    {
      id: 1,
      liked: false
    },
    {
      id: 2,
      liked: true
    },
    {
      id: 3,
      liked: false
    }
  ]
}

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
  describe('<div> for app', () => {

    describe('header', () => {
      it('renders with the correct text', () => {
        const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
        expect(wrapper.find({ "data-testid": 'header' }).text()).toEqual('Daily Art Prompt')
      })

      it('is red', () => {
        const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
        expect(wrapper.find({ "data-testid": 'header' }).prop('style')).toEqual({ color: 'red' })
      })
    })

    describe('<PromptLayout>', () => {
      it('should exist', () => {
        const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
        expect(wrapper.find({ 'data-testid': 'promptLayout' })).toHaveLength(1)
      })

    })

    describe('<div> header for Art Gallery', () => {
      it('should render header text', () => {
        const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
        const result = wrapper.find({ "data-testid": 'artGalleryHeader' }).text()
        expect(result).toEqual('Art Gallery')
      })
    })

    describe('<ImageLayout>', () => {
      it('should renders imageLayout for each image in array', () => {
        const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
        expect(wrapper.find('ImageLayout').exists()).toBe(true)
      })

      describe('image prop', () => {
        it('should pass obj to component', () => {
          const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
          expect(wrapper.find({ "data-testid": 'image-1' }).prop('image')).toEqual({
            id: 1,
            liked: false
          })
        })

        describe('when image.liked is true', () => {
          it('should update liked attribute to false when image is doubleClicked', () => {
            const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
            wrapper.setState({
              promptsImages: [
                {
                  id: 1,
                  liked: true
                }
              ]
            })
            wrapper.find({ 'data-testid': 'image-1' }).simulate('doubleClick', 1)
            expect(wrapper.find({ 'data-testid': 'image-1' }).prop('image').liked).toEqual(false)
          })
        })

        describe('when image.liked is false', () => {
          it('should update image.liked to true when image is doubleClicked', () => {
            const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
            wrapper.find({ 'data-testid': 'image-1' }).simulate('doubleClick', 1)
            expect(wrapper.find({ 'data-testid': 'image-1' }).prop('image').liked).toEqual(true)
          })
        })
      })
    })
  })
})
