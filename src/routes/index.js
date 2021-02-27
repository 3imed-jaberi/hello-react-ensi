import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import HomePage from '../pages/Home'
import AboutPage from '../pages/About'

function Navigation () {
  return (
    <ul>
      <li>
        <Link to='/home'> Home </Link>
      </li>
      <li> 
        <NavLink to='/about' activeStyle={{ color: 'red' }}> About </NavLink>
      </li>
    </ul>
  )
}

function Routes() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route 
          path={['/', '/home', '/home/:arg']}
          exact={true}
          component={HomePage}
          // render={() => <HomePage />}
          // children={<Fragment>
          //   <h2> Welcome to React Router </h2>
          //   <HomePage />
          // </Fragment>}
        />
        <Route 
          path='/about'
          exact
          component={AboutPage}
        />
        <Route>
          <h1> Not Found !</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
