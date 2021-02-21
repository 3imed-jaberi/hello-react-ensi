import React from 'react'
import styled from 'styled-components'
import { Alert } from 'react-bootstrap'
import { Button } from '@material-ui/core'

import './Style.css'

const Text = styled.h2`
  color: white;
  background-color: red;
  padding: 20px;
  margin: 10px;
`

// Css-In-JS
class Style extends React.Component {
  render() {
    return (
      // style="color:'white'; bakcground-color: 'red';"
      // <h1 style={{ color: 'white', backgroundColor: 'red' }}> Hello Style ! </h1>
      <React.Fragment>
        <h1> Hello Style ! </h1>
        <hr/>
        <Text> Hello Style ! </Text>
        <hr/>
        <button className='btn btn-danger'> Alert </button>
        <hr/>
        <Alert variant='primary'> Welcome to React-Bootstrap !</Alert>
        <hr/>
        <Button variant="contained" color="primary">Welcome to Material-UI !</Button>
      </React.Fragment>
    )
  }
}

export default Style
