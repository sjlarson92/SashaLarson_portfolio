import React from 'react';
import { ImageLayout, mapDispatchToProps } from './ImageLayout'
import { shallow } from 'enzyme';
import * as TYPES from '../store/actions'


const defaultProps = {
  onDoubleClick: jest.fn(),
  onKeyDown: jest.fn(),
  deleteComment: jest.fn(),
  updateClassName: jest.fn(),
  editComment: jest.fn(),
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
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ImageLayout {...defaultProps} />)
  })

  describe('<Image />', () => {
    it('should render with correct image', () => {
      expect(wrapper.find('Image').prop('image')).toEqual(defaultProps.image)
    })

    it('should call onDoubleClick with imageId when image is doubleClicked', () => {
      wrapper.find('Image').simulate('doubleClick')
      expect(defaultProps.onDoubleClick).toHaveBeenCalledWith(defaultProps.image.id)
    })

  })

  describe('<div> LikedDiv', () => {

    it('has correct className', () => {
      expect(wrapper.find({ 'data-testid': 'likedDiv' }).prop('className')).toEqual('likedText')
    })

    it('should render correct text for likedDiv', () => {
      expect(wrapper.find({ 'data-testid': 'likedDiv' }).text()).toEqual('Liked')
    })
  })

  describe('<CommentLayout/>', () => {
    it('should render CommentLayout for each comment in array that is not deleted', () => {
      const wrapper = shallow(<ImageLayout {...defaultProps} />)
      expect(wrapper.find('CommentLayout')).toHaveLength(1)
    })

    it('should pass correct comment prop', () => {
      expect(wrapper.find({ 'data-testid': 'comment-1' }).prop('comment')).toEqual(defaultProps.image.comments[0])
    })

    describe('onDelete', () => {
      it('should call deleteComment with correct params onDelete', () => {
        wrapper.find({ 'data-testid': 'comment-1' }).simulate('delete')
        expect(defaultProps.deleteComment).toHaveBeenCalledWith(defaultProps.image.id, defaultProps.image.comments[0].id)
      })
    })

    describe('onEdit', () => {
      it('should call updateClassName with correct params', () => {
        const props = {
          ...defaultProps,
          image: {
            ...defaultProps.image,
            comments: [
              {
                id: 1,
                editing: false
              }
            ]
          }
        }
        wrapper = shallow(<ImageLayout {...props} />)
        wrapper.find({ 'data-testid': 'comment-1' }).simulate('edit')
        expect(defaultProps.updateClassName).toHaveBeenCalledWith(
          props.image.id,
          props.image.comments[0].id,
          props.image.comments[0].editing)
      })
    })

    describe('onCancel', () => {
      it('should call updateClassName with correct params onCancel', () => {
        const props = {
          ...defaultProps,
          image: {
            ...defaultProps.image,
            comments: [{
              id: 1,
              editing: true
            }]
          }
        }
        wrapper = shallow(<ImageLayout {...props} />)
        wrapper.find({ 'data-testid': 'comment-1' }).simulate('cancel')
        expect(defaultProps.updateClassName).toHaveBeenCalledWith(
          props.image.id,
          props.image.comments[0].id,
          props.image.comments[0].editing)
      })
    })

    describe('onSubmit', () => {
      describe('when user clicks enter', () => {
        it('should call editComment with correct params onSubmit', () => {
          wrapper.find({ 'data-testid': 'comment-1' }).simulate('submit', { keyCode: 13, target: { value: 'updated comment' } })
          expect(defaultProps.editComment).toHaveBeenCalledWith(1, 1, 'updated comment')
        })
      })

      describe('when user does not click enter', () => {
        it('should not call editComment', () => {
          wrapper.find({ 'data-testid': 'comment-1' }).simulate('submit', { keyCode: 10 })
          expect(defaultProps.editComment).not.toHaveBeenCalledWith()
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
})

describe('mapDispatchToProps', () => {
  const dispatch = jest.fn()

  describe('deleteComment', () => {
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

  describe('updateClassName', () => {
    it('should call dispatch with type: UPDATE_COMMENT_EDITING and correct payload', () => {
      mapDispatchToProps(dispatch).updateClassName(1, 1, false)
      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.UPDATE_COMMENT_EDITING,
        payload: {
          imageId: 1,
          commentId: 1,
          editing: false
        }
      })
    })
  })

  describe('editComment', () => {
    it('should call dispatch with type: EDIT_COMMENT and correct params', () => {
      mapDispatchToProps(dispatch).editComment(1, 1, 'updated comment')
      expect(dispatch).toHaveBeenCalledWith({
        type: TYPES.EDIT_COMMENT,
        payload: {
          imageId: 1,
          commentId: 1,
          value: 'updated comment'
        }
      })
    })
  })
})


