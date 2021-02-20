import React from 'react'
import autoBind from 'auto-bind/react'

class Events extends React.Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      clickContent: 'Click me !'
    }

    // bind by contructor
    // this.handleClick = this.handleClick.bind(this)

    // auto-bind all methods
    autoBind(this);
  }

  handleInput (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  // binding by arrow funcs
  // handleClick = () => {
  //   this.setState({ clickContent: 'Clicked !!'})
  // }

  handleClick () {
    this.setState({ clickContent: 'Clicked !!'})
  }

  render() {
    return (
      <div>
        <h1> Welcome to Event Component !</h1>
        <hr />
        <input 
          onChange={this.handleInput.bind(this)}
          type='text'
          name='firstname'
          value={this.state.firstname}
          placeholder='first name'
        />
        <input 
          onChange={this.handleInput.bind(this)}
          type='text'
          name='lastname'
          value={this.state.lastname}
          placeholder='last name'
        />
        <button type='click' onClick={this.handleClick}>{this.state.clickContent}</button>
      </div>
    )
  }
}

export default Events
