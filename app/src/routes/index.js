import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route 
          path={['/', '/home']}
          exact
          component={HomePage}
        />
        <Route 
          path='/about'
          exact
          component={AboutPage}
        />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes
