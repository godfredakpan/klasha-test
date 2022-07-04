import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Layout = lazy(() => import('./layouts/Layout'))
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </>
  )
}

export default App
