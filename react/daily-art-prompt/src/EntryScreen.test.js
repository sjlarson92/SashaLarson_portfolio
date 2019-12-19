import React from 'react';
import { EntryScreen, dispatchFunctions } from './EntryScreen'
import { mount, shallow } from 'enzyme';
import { getImagesAction } from './requests/imageApi'
import { getPromptsAction } from './requests/promptsApi';

jest.mock('./DailyArtPromptApp')

const defaultProps = {
    getImages: jest.fn(),
    getPrompts: jest.fn()
}

describe('<EntryScreen>', () => {
    it('should call getImages upon initial render', () => {
        mount(<EntryScreen {...defaultProps} />)
        expect(defaultProps.getImages).toHaveBeenCalledWith()
    })

    it('should call getPrompts upon initial render', () => {
        mount(<EntryScreen {...defaultProps} />)
        expect(defaultProps.getPrompts).toHaveBeenCalledWith()
    })



    it('should render <DailyArtPromptApp>', () => {
        const wrapper = shallow(<EntryScreen />)
        expect(wrapper.find({ 'data-testid': 'dailyArtPromptApp' }))
            .toHaveLength(1)
    })

})

describe('dispatchFunctions', () => {
    it('should have all the correct actions', () => {
        expect(dispatchFunctions).toEqual({
            getImages: getImagesAction,
            getPrompts: getPromptsAction
        })
    })

})