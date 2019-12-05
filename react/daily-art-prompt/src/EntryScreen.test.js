import React from 'react';
import { EntryScreen } from './EntryScreen'
import { shallow } from 'enzyme';


describe('<EntryScreen>', () => {
    it('should render <DailyArtPromptApp>', () => {
        const wrapper = shallow(<EntryScreen />)
        expect(wrapper.find({ 'data-testid': 'dailyArtPromptApp' }))
            .toHaveLength(1)
    })

})
