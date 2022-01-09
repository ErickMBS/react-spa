import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {

  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>
    </Router>
  )
}

export default App
