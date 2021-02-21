import React, { Fragment, useState, useEffect } from 'react'
import { unmountComponentAtNode } from 'react-dom';

function Hooks (props) {
  // state
  const [name, setName] = useState('')
  const [clicked, setClicked] = useState(false)
  // update state through set[] +++ events
  const updateName = () => { 
    setName(clicked ? 'Ahmed' : 'Imed') 
    setClicked(!clicked)
  }

  const UnmountApp = () => unmountComponentAtNode(document.getElementById('root'))

  // ComponentDidUpdate with all.
  // useEffect(() => {
  //   setName(props.defaultName || 'Imed')
  // })
 
  // ComponentDidUpdate with Deps.
  // useEffect(() => {
  //   console.log('hhhh');
  //   setName(props.defaultName || 'Imed')
  // }, [props.defaultName])

  // ComponentDidMount
  useEffect(() => {
    setName(props.defaultName || 'Imed')
  }, [])

  // ComponentWillUnmount
  useEffect(() => {
    // logical >>> ex: subscribe
    return () => { // ---> clean up func
      // ex: unsubscribe
      console.log('Unmount Component !')
    }
  }, [])


  return (
    <Fragment>
      <h1> Welcome to React Hooks ! </h1>
      <hr/>
      <h3 
        onDoubleClick={UnmountApp}
        onClick={updateName}
      >
        {name} - {clicked.toString()}
      </h3>
    </Fragment>
  )
}

export default Hooks
