import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image'

const defaultProps = {
  image: {
    src: 'source',
    name: 'name',
  },
  onDoubleClick: jest.fn()
}
describe('<Image />', () => {
  describe('<img />', () => {
    it('renders with correct src prop', () => {
      const wrapper = shallow(<Image {...defaultProps}/>)
      expect(wrapper.find('img').prop('src')).toEqual(defaultProps.image.src)
    })

    it('render with correct alt prop', () => {
      const wrapper = shallow(<Image {...defaultProps}/>)
      expect(wrapper.find('img').prop('alt')).toEqual(defaultProps.image.name)
    })

    it('should call onDoubleClick from props when image is doubleClicked', () => {
      const wrapper = shallow(<Image {...defaultProps}/>)
      wrapper.find('img').simulate('doubleClick')
      expect(defaultProps.onDoubleClick).toHaveBeenCalled()
    })
  })
})
