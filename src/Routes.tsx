import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import { LandingBackgrounds } from './pages/Landing/LandingBackgrounds'

export default () => {
  return (
    <BrowserRouter>
      <Route
        exact path='/'
        render={() => <Landing background={LandingBackgrounds[0].img} />}
      />
    </BrowserRouter>
  )
}