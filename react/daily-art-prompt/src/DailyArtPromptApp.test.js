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
  ],
  updatePromptImages: jest.fn()
}

describe('<DailyArtPromptApp>', () => {

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

        describe('when image is double clicked', () => {
          it('should call updatePromptImages with correct params', () => {
            const wrapper = shallow(<DailyArtPromptApp {...defaultProps} />);
            wrapper.find({ 'data-testid': 'image-1' }).simulate('doubleClick', 1)
            expect(defaultProps.updatePromptImages).toHaveBeenCalledWith(1)
          })
        })
      })
    })
  })
})
