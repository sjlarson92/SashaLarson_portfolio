import React from 'react';
import CommentLayout from './CommentLayout'
import { shallow } from 'enzyme';

const defaultProps = {
    comment: {
        text: 'I am a comment'
    },
    onClick: jest.fn()
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

    describe('Delete comment button', () => {
        it('should call props onClick when clicked', () => {
            wrapper.find('button').simulate('click')
            expect(defaultProps.onClick).toHaveBeenCalledWith()
        })
        it('should render button with correct text', () => {
            expect(wrapper.find('button').text()).toEqual('Delete')
        })


    })


})
