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
        exact path='/CS GO'
        render={() => <Landing background={LandingBackgrounds[0].img} />}
      />
      <Route
        exact path='/Fortnite'
        render={() => <Landing background={LandingBackgrounds[1].img} />}
      />
      <Route
        exact path='/League Of Legends'
        render={() => <Landing background={LandingBackgrounds[2].img} />}
      />
      <Route
        exact path='/Hearthstone'
        render={() => <Landing background={LandingBackgrounds[3].img} />}
      />
      <Route
        exact path='/Rainbow Six Siege'
        render={() => <Landing background={LandingBackgrounds[4].img} />}
      />
      <Route
        exact path='/Valorant'
        render={() => <Landing background={LandingBackgrounds[5].img} />}
      />
      <Route
        exact path='/Apex Legends'
        render={() => <Landing background={LandingBackgrounds[6].img} />}
      />
    </BrowserRouter>
  )
}