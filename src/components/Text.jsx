import React from 'react'

const Text = () => {
  const [name, setName] = React.useState('Hhhhh')
  
  return (
    <h1> Text Component {name}</h1>
  )
}

export default Text
