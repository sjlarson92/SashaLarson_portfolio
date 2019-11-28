import React from 'react';
import CommentLayout from './CommentLayout'
import { shallow } from 'enzyme';

const defaultProps = {
    comment: {
        text: 'I am a comment'
    },
    handleDeleteButton: jest.fn(),
    handleCancelButton: jest.fn(),
    handleEditButton: jest.fn(),
    handleSubmit: jest.fn()
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
            it('should have className hidden', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                expect(wrapper.find({ name: 'nonEditingDiv' }).prop('className')).toEqual('hidden')
            })

        })
        describe('when comment.editing is false', () => {
            it('should have className empty', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: false }} />)
                expect(wrapper.find({ name: 'nonEditingDiv' }).prop('className')).toEqual('')
            })

        })

        describe('Delete comment button', () => {
            it('should call props handleDeleteButton when clicked', () => {
                wrapper.find({ name: 'deleteButton' }).simulate('click')
                expect(defaultProps.handleDeleteButton).toHaveBeenCalledWith()
            })
            it('should render button with correct text', () => {
                expect(wrapper.find({ name: 'deleteButton' }).text()).toEqual('Delete')
            })
        })

        describe('Edit comment Button', () => {
            it('should render button with correct text', () => {
                expect(wrapper.find({ name: 'editButton' }).text()).toEqual('Edit')
            })

            it('should call handleEditButton when clicked', () => {
                wrapper.find({ name: 'editButton' }).simulate('click')
                expect(defaultProps.handleEditButton).toHaveBeenCalledWith()
            })


        })
    })

    describe('<div> for when user is editing comment', () => {

        describe('when comment.editing is true', () => {
            it('should have className: \'\' ', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                expect(wrapper.find({ name: 'editingDiv' }).prop('className')).toEqual('')
            })

        })
        describe('when comment.editing is false', () => {
            it('should have className: hidden', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: false }} />)
                expect(wrapper.find({ name: 'editingDiv' }).prop('className')).toEqual('hidden')
            })

        })

        describe('<input> for updating comment', () => {
            it('should render with defaultValue of current comment text', () => {
                expect(wrapper.find({ name: 'editInputBox' }).prop('defaultValue')).toEqual(defaultProps.comment.text)
            })

            it('should call handleSubmit onKeyDown', () => {
                wrapper.find({ name: 'editInputBox' }).simulate('keyDown')
                expect(defaultProps.handleSubmit).toHaveBeenCalledWith()
            })
        })

        describe('<button> for cancel updating comment', () => {
            it('should render with correct text', () => {
                expect(wrapper.find({ name: 'cancelButton' }).text()).toEqual('Cancel')
            })

            it('should call handleCancelButton when clicked', () => {
                wrapper.find({ name: 'cancelButton' }).simulate('click')
                expect(defaultProps.handleCancelButton).toHaveBeenCalledWith()
            })
        })
    })
})
