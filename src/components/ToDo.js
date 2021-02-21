import React from 'react'
import crossUid from 'cross-uid'

class ToDo extends React.Component {
  constructor() {
    super()

    this.state = {
      tasksList: [],
      task: ''
    }
  }

  handleTaskInput (event) {
    this.setState({ task: event.target.value })
  }

  addTask () {
    this.setState({ 
      tasksList: [
        ...this.state.tasksList,
        this.state.task
      ],
      task: '' // the input be empty
    })
  }

  removeItem (task) {
    const newTasksList = this.state.tasksList.filter((t) => t !== task)
    this.setState({ tasksList: [...newTasksList] })
  }

  render() {
    return (
      <React.Fragment>
        <h1> Welcome to ToDo list ! </h1>
        <hr />
        <input 
          onChange={this.handleTaskInput.bind(this)}
          type='text'
          name='task'
          value={this.state.task} 
          placeholder='task ...'
        />
        <button type='click' onClick={this.addTask.bind(this)}> Add Task</button>
        { this.state.tasksList.map((item) => <h3 key={crossUid()} onClick={this.removeItem.bind(this, item)}> {item} </h3>) }
      </React.Fragment>
    )
  }
}

export default ToDo
