import React from 'react';
import { EntryScreen, dispatchFunctions } from './EntryScreen'
import { mount, shallow } from 'enzyme';
import { getImagesAction } from './requests/imageApi'

jest.mock('./DailyArtPromptApp')

const defaultProps = {
    getImages: jest.fn()
}

describe('<EntryScreen>', () => {
    it('should call getImages upon initial render', () => {
        mount(<EntryScreen {...defaultProps} />)
        expect(defaultProps.getImages).toHaveBeenCalledWith()
    })


    it('should render <DailyArtPromptApp>', () => {
        const wrapper = shallow(<EntryScreen />)
        expect(wrapper.find({ 'data-testid': 'dailyArtPromptApp' }))
            .toHaveLength(1)
    })

})

describe('dispatchFunctions', () => {
    it('should equal an object with key: getImages and value: getImagesAction', () => {
        expect(dispatchFunctions).toEqual({
            getImages: getImagesAction
        })
    })

})