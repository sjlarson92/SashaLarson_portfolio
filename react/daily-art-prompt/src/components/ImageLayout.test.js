import React from 'react';
import { ImageLayout, mapDispatchToProps } from './ImageLayout'
import { shallow } from 'enzyme';
import * as TYPES from '../store/actions'


const defaultProps = {
  deleteComment: jest.fn(),
  onDoubleClick: jest.fn(),
  onKeyDown: jest.fn(),
  image: {
    id: 1,
    liked: true,
    comments: [
      {
        id: 1,
        text: 'comment'
      },
      {
        id: 2,
        text: 'tests are fun',
        deleted: true
      }
    ]
  },
}

describe('<ImageLayout />', () => {
  describe('<Image />', () => {
    it('should render with correct image', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      expect(wrapper.find('Image').prop('image')).toEqual(defaultProps.image)
    })

    it('should call onDoubleClick with imageId when image is doubleClicked', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      wrapper.find('Image').simulate('doubleClick')
      expect(defaultProps.onDoubleClick).toHaveBeenCalledWith(defaultProps.image.id)
    })

  })

  describe('<div> LikedDiv', () => {
    it('has a className of hidden when image is not liked', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} image={{ ...defaultProps.image, liked: false }} />)
      expect(wrapper.find({ 'data-testid': 'likedDiv' }).prop("className")).toEqual("hidden")
    })

    it('has a className of an empty string when image is liked', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      expect(wrapper.find({ 'data-testid': 'likedDiv' }).prop('className')).toEqual('likedText')
    })

    it('should render correct text for likedDiv', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      expect(wrapper.find({ 'data-testid': 'likedDiv' }).text()).toEqual('Liked')
    })
  })

  describe('<CommentLayout/>', () => {
    it('should render CommentLayout for each comment in array that is not deleted', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      expect(wrapper.find('CommentLayout')).toHaveLength(1)
    })

    it('should pass correct comment prop', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      expect(wrapper.find({ 'data-testid': 1 }).prop('comment')).toEqual(defaultProps.image.comments[0])
    })
    describe('when clicked', () => {
      it('should call deleteComment with correct params', () => {
        const wrapper = shallow(<ImageLayout {...defaultProps} />)
        wrapper.find({ 'data-testid': 1 }).simulate('click')
        expect(defaultProps.deleteComment).toHaveBeenCalledWith(1, 1)
      })
    })
  })

  describe('<Input>', () => {
    it('should call onKeyDown when user clicks a key with correct params', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      wrapper.find({ 'data-testid': 'inputBox' }).simulate('keyDown', 'event')
      expect(defaultProps.onKeyDown).toHaveBeenCalledWith('event', 1)
    })
  })
})

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn()
  it('should call dispatch with type: DELETE_COMMENT and correct payload', () => {
    mapDispatchToProps(dispatch).deleteComment(1, 1)
    expect(dispatch).toHaveBeenCalledWith({
      type: TYPES.DELETE_COMMENT,
      payload: {
        imageId: 1,
        commentId: 1
      }
    })
  })

})


