import React from 'react';
import CommentLayout from './CommentLayout'
import { shallow } from 'enzyme';

const defaultProps = {
    comment: {
        text: 'I am a comment'
    },
    onDelete: jest.fn(),
    onCancel: jest.fn(),
    onEdit: jest.fn(),
    onSubmit: jest.fn()
}
describe('<CommentLayout />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<CommentLayout {...defaultProps} />)
    })
    describe('<Comment/>', () => {
        it('should render with correct comment prop', () => {
            expect(wrapper.find('Comment').prop('comment')).toEqual(defaultProps.comment.text)
        })
    })

    describe('<div> for when user is not editing comment', () => {

        describe('when comment.editing is true', () => {
            it('should not render', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                expect(wrapper.find({ name: 'nonEditingDiv' })).toHaveLength(0)
            })

        })
        describe('when comment.editing is false', () => {
            it('should render', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: false }} />)
                expect(wrapper.find({ name: 'nonEditingDiv' })).toHaveLength(1)
            })

        })

        describe('Delete comment button', () => {
            it('should call props onDelete when clicked', () => {
                wrapper.find({ name: 'deleteButton' }).simulate('click')
                expect(defaultProps.onDelete).toHaveBeenCalledWith()
            })
            it('should render button with correct text', () => {
                expect(wrapper.find({ name: 'deleteButton' }).text()).toEqual('Delete')
            })
        })

        describe('Edit comment Button', () => {
            it('should render button with correct text', () => {
                expect(wrapper.find({ name: 'editButton' }).text()).toEqual('Edit')
            })

            it('should call onEdit when clicked', () => {
                wrapper.find({ name: 'editButton' }).simulate('click')
                expect(defaultProps.onEdit).toHaveBeenCalledWith()
            })


        })
    })

    describe('<div> for when user is editing comment', () => {

        describe('when comment.editing is true', () => {
            it('should render ', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                expect(wrapper.find({ name: 'editingDiv' })).toHaveLength(1)
            })
        })

        describe('when comment.editing is false', () => {
            it('should not render', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: false }} />)
                expect(wrapper.find({ name: 'editingDiv' })).toHaveLength(0)
            })
        })

        describe('<input> for updating comment', () => {
            it('should render with defaultValue of current comment text', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ text: 'currentComment', editing: true }} />)
                expect(wrapper.find({ name: 'editInputBox' }).prop('defaultValue')).toEqual('currentComment')
            })

            it('should call onSubmit onKeyDown', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                wrapper.find({ name: 'editInputBox' }).simulate('keyDown')
                expect(defaultProps.onSubmit).toHaveBeenCalledWith()
            })
        })

        describe('<button> for cancel updating comment', () => {
            it('should render with correct text', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                expect(wrapper.find({ name: 'cancelButton' }).text()).toEqual('Cancel')
            })

            it('should call onCancel when clicked', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                wrapper.find({ name: 'cancelButton' }).simulate('click')
                expect(defaultProps.onCancel).toHaveBeenCalledWith()
            })
        })
    })
})
