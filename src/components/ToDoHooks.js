import React from 'react'
import crossUid from 'cross-uid'

function ToDoHooks () {

  const [tasksList, setTasksList] = React.useState([])
  const [task, setTask] = React.useState('')
  const [btnContent, setBtnContent] = React.useState('cccc')
  const [updated, setUpdated] = React.useState(false)

  const handleTaskInput = event => setTask(event.target.value)

  const addTask = () => {
    setTasksList([...tasksList, task])
    setTask('')
    setUpdated(false)
  }

  const removeItem = (task) => {
    const newTasksList = tasksList.filter((t) => t !== task)
    setTasksList([...newTasksList])
  }

  const updateItem = (item) => {
    setTask(item)
    setBtnContent('Update Task')
    removeItem(item)
    setUpdated(true)
    // ajout
  }

  // componentDidUpdate behavoir
  React.useEffect(() => {
    // setTimeout(() => {
      console.log('useEffect', updated);
      setBtnContent(updated ? 'Update Task' : 'Add Task')
    // }, 3000);
  }, [updated])

  return (
    <React.Fragment>
      <h1> Welcome to ToDo list with Hooks ! </h1>
      <hr />
      <input 
        onChange={handleTaskInput}
        type='text'
        name='task'
        value={task} 
        placeholder='task ...'
      />
      <button type='click' onClick={addTask}> {btnContent} </button>
      { 
        tasksList.map((item) => 
          <h3 
            key={crossUid()}
            onClick={() => updateItem(item)}
            onMouseLeave={() => removeItem(item)}
          > 
            {item}
          </h3>)
      }
    </React.Fragment>
  )
}

export default ToDoHooks
