import React from 'react';
import DailyArtPromptApp from './DailyArtPromptApp.js'
import beachPuppy from './images/beach-puppy.jpg';

import { shallow } from 'enzyme';

describe('<DailyArtPromptApp>', () => {
  //Bad practice of testing, do not do this!
  describe('findPromptbyId', () => {
    it('returns a prompt obj when given a promptId', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      const instance = wrapper.instance();
      const result = instance.findPromptbyId(1);
      expect(result).toEqual({id: 1, date: "October 11", text: "Puppy"})
    })
  })

  describe('findImagebyId', () => {
    it('returns an img obj when given an imageId', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      const instance = wrapper.instance();
      const result = instance.findImagebyId(1);
      expect(result).toEqual({
        id: 1,
        promptId: 1,
        src: beachPuppy,
        name: 'beachPuppy',
        liked: false
      })
    })
  })

  describe('handleButtonClick', () => {
    it('console.log with correct params when currentPrompt.id (in state) is 1 and num is -1', () => {
      console.log = jest.fn()
      const wrapper = shallow(<DailyArtPromptApp />);
      wrapper.setState({currentPrompt: { id: 1}})
      wrapper.instance().handleButtonClick(-1);
      expect(console.log).toHaveBeenCalledWith("There are no previous prompts")
    })

    it('returns nothing', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      wrapper.setState({currentPrompt: { id: 1}})
      const result = wrapper.instance().handleButtonClick(-1);
      expect(result).toEqual()
    })

    it('sets currentPrompt in state properly when newCurrentPrompt is defined', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      wrapper.instance().handleButtonClick(2)
      // wrapper.setState({currentPrompt: { id: 1}})
      // const result = wrapper.instance().handleButtonClick(-1);
      expect(wrapper.state().currentPrompt).toEqual({"date": "October 12", "id": 2, "text": "Kitten"})
    })
  })

  describe('previous button', () => {
    it('calls handleButtonClick with correct params onClick', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      wrapper.instance().handleButtonClick = jest.fn();
      wrapper.find({testID: 'previousButton'}).simulate('click')
      expect(wrapper.instance().handleButtonClick).toHaveBeenCalledWith(-1)
    })
  })

  describe('next button', () => {
    it('calls handleButtonClick with correct params onClick', () => {
      const wrapper = shallow(<DailyArtPromptApp />);
      wrapper.instance().handleButtonClick = jest.fn();
      wrapper.find({testID: 'nextButton'}).simulate('click')
      expect(wrapper.instance().handleButtonClick).toHaveBeenCalledWith()
    })
  })

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

    describe('<div> for mainContentContainer',() => {
      it('should have a prompt-row className',() => {
        const wrapper = shallow(<DailyArtPromptApp />);
        const result = wrapper.find({testID:'mainContentContainer'}).props().className;
        expect(result).toEqual('prompt-row');
      })

      describe('<button> for previousButton', () => {
        it('renders correct text', () => {
          const wrapper = shallow(<DailyArtPromptApp />);
          expect(wrapper.find({testID:'previousButton'}).text()).toEqual('Previous');
        })
      })

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

      describe('<button> for nextButton', () => {
        it('renders correct text', () => {
          const wrapper = shallow(<DailyArtPromptApp />);
          expect(wrapper.find({testID:'nextButton'}).text()).toEqual('Next')
        })
      })
    })

    describe('<div> header for Art Gallery', () => {
      it('should render header text', () => {
        const wrapper = shallow(<DailyArtPromptApp />);
        const result = wrapper.find({testID:'artGalleryHeader'}).text()
        expect(result).toEqual('Art Gallery')
      })
    })

    describe('<div> container for imagesArray', () => {
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
