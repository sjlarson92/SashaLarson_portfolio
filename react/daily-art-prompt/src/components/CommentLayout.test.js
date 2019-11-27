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

    describe('<div> for default buttons', () => {
        describe('when comment.editing is true', () => {
            it('should have className hidden', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: true }} />)
                expect(wrapper.find({ name: 'defaultButtonDiv' }).prop('className')).toEqual('hidden')
            })

        })
        describe('when comment.editing is false', () => {
            it('should have className empty', () => {
                wrapper = shallow(<CommentLayout {...defaultProps} comment={{ editing: false }} />)
                expect(wrapper.find({ name: 'defaultButtonDiv' }).prop('className')).toEqual('')
            })

        })

        describe('Delete comment button', () => {
            it('should call props onClick when clicked', () => {
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

        })
    })

    describe('<div> for editing comment', () => {

    })

})
