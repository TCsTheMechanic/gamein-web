import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import { LandingBackgrounds } from './pages/Landing/LandingBackgrounds'

export default () => {
  return (
    <BrowserRouter>
      <Route
        exact path='/'
        render={() => <Landing background={''} />}
      />
      <Route
        exact path='/cs go'
        render={() => <Landing background={LandingBackgrounds[0].img} />}
      />
      <Route
        exact path='/fortnite'
        render={() => <Landing background={LandingBackgrounds[1].img} />}
      />
      <Route
        exact path='/league of legends'
        render={() => <Landing background={LandingBackgrounds[2].img} />}
      />
      <Route
        exact path='/hearthstone'
        render={() => <Landing background={LandingBackgrounds[3].img} />}
      />
      <Route
        exact path='/rainbow six siege'
        render={() => <Landing background={LandingBackgrounds[4].img} />}
      />
      <Route
        exact path='/valorant'
        render={() => <Landing background={LandingBackgrounds[5].img} />}
      />
      <Route
        exact path='/apex legends'
        render={() => <Landing background={LandingBackgrounds[6].img} />}
      />
    </BrowserRouter>
  )
}