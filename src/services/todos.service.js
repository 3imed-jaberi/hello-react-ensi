import request from '../utils/request.util'

export async function getTodos() {
  try {
    const response = await request({ 
      method: 'GET',
      url: '/todos'
    })

    const data = await response.data

    return data
  } catch (error) {
    throw (error.response || error.message)
  }
}

export async function addTodo(todo) {
  try {
    const response = await request({ 
      method: 'POST', // GET, POST, PUT, DELETE
      url: `/todos`,
      // url: `/todos/${1}`,
      data: todo
    })

    console.log({ response });

    const data = await response.data

    return data
  } catch (error) {
    throw (error.response || error.message)
  }
}

