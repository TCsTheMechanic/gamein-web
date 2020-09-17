import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

describe('App Testing', () => {
  it('renders routes', () => {
    const component = shallow(<App />)
    expect(component.find('Routes').text())
  })
})