import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import qs from 'querystring'
import { addTodo, getTodos } from '../services/todos.service';

function HomePage(props) {

  const [todos, setTodos] = React.useState([
    // all todos ...
  ])
  const [todosError, setTodosError] = React.useState('')

  const history = useHistory()
  const location = useLocation()
  const params = useParams()

  React.useEffect(() => {
    // console.log(props);
    // console.log(
    //   props.match.params, // /:arg1
    //   props.location.pathname, // /home...
    //   props.location.search // ?query..
    // )

    // console.log(
    //   params,
    //   location.pathname,
    //   location.search,
    //   qs.parse(location.search.slice(1))
    // )
    getTodos()
      .then(response => {
        setTodos(response)
      })
      .catch(error => {
        setTodosError(error)
      })
  }, [])

  const redirectToAbout = () => {
    // history.push('/about')
    addTodo({
      userId: 10,
      id: 300,
      title: "Go to GYM !",
      completed: false
    })
  }

  if (props.location.pathname === '/home') {
    return <h1 onClick={redirectToAbout}> Home Page Content with Pathanme Test </h1>
  }

  // return (<h1> Home Page Content {
  // props.match.params.arg ? ' - Exist React Router Params ' : '' } </h1>)


  return (
    <React.Fragment>
      <h1 onClick={redirectToAbout} > Home Page </h1>
      <pre>
        {
          todosError 
            ? `Error: ${JSON.stringify(todosError, null, 2)}`
            : JSON.stringify(todos, null, 2)
        }
      </pre>
    </React.Fragment>
  )
}

export default HomePage
