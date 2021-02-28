import React, { useState, useEffect } from 'react'

import HomeLayout from '../Layouts/HomeLayout'
import Desc from '../components/Desc'
import Post from '../components/Post'
import { getAllTodos } from '../services/todos.service'

function HomePage() {
  const [data, setData] = useState([])

  // didMount behavoir
  useEffect(() => {
    // call to service...
    async function handler () {
      const response = await getAllTodos()
      console.log({response});
      setData(response)
    }

    handler()
    
  }, [])

  return (
    <HomeLayout 
      leftComponent={<Desc />}
      rightComponent={data && data.map(item => <Post key={item.id * 100} {...item} />)}
    />
  )
}

export default HomePage
