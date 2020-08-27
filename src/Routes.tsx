import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'

export default () => {
  return(
    <BrowserRouter>
      <Route path='/' component={Landing} exact/>
    </BrowserRouter>
  )
}