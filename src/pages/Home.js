import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import qs from 'querystring'

function HomePage(props) {

  const history = useHistory()
  const location = useLocation()
  const params = useParams()

  React.useEffect(() => {
    console.log(props);
    // console.log(
    //   props.match.params, // /:arg1
    //   props.location.pathname, // /home...
    //   props.location.search // ?query..
    // )

    console.log(
      params,
      location.pathname,
      location.search,
      qs.parse(location.search.slice(1))
    )
  })

  const redirectToAbout = () => {
    history.push('/about')
  }

  if (props.location.pathname === '/home') {
    return <h1 onClick={redirectToAbout}> Home Page Content with Pathanme Test </h1>
  }

  return (<h1> Home Page Content {
  props.match.params.arg ? ' - Exist React Router Params ' : '' } </h1>)
}

export default HomePage
