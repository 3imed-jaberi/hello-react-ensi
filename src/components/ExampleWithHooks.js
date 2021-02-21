import React from 'react'
import crossUid from 'cross-uid';

function ExampleWithHooks () {
  const [compus, setCompus] = React.useState([])

  React.useEffect(() => {
    setCompus([
      'Ensi',
      'Isamm',
      'Esen',
      'ESC',
      'ISCAE'
    ])
  }, [])

  return (
    <>
      <h1> Welcome to List Rendering with Hooks !</h1>
      <hr />
      <ul>
        { 
          compus && compus.map((item, index) => (<li key={crossUid()}>{index + 1} - {item}</li>)) 
        }
      </ul>
    </>
  )
}

export default ExampleWithHooks
