import React from 'react';
import ImageLayout from './ImageLayout'
import { shallow } from 'enzyme';

const defaultProps = {
  onDoubleClick: jest.fn(),
  image: {
    id: 1,
    liked: true
  }
}

describe('<ImageLayout />', () => {
  describe('<Image />', () => {
    it('should render with correct image', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps}/>)
      expect(wrapper.find('Image').prop('image')).toEqual(defaultProps.image)
    })

    it('should call onDoubleClick with imageId when image is doubleClicked',() => {
      const wrapper = shallow(<ImageLayout {...defaultProps}/>)
      wrapper.find('Image').simulate('doubleClick')
      expect(defaultProps.onDoubleClick).toHaveBeenCalledWith(defaultProps.image.id)
    })

    it('has a className of hidden when image is not liked', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} image={{...defaultProps.image, liked: false}}/>)
      expect(wrapper.find({testID:'likedDiv'}).prop("className")).toEqual("hidden")
    })

    it('has a className of an empty string when image is liked', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps}/>)
      expect(wrapper.find({testID:'likedDiv'}).prop('className')).toEqual('')
    })

    it('should render correct text for likedDiv',() => {
      const wrapper = shallow(<ImageLayout {...defaultProps}/>)
      expect(wrapper.find({testID:'likedDiv'}).text()).toEqual('Liked')
    })
  })
})