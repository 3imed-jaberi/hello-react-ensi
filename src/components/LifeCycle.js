import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom'

class LifeCycle extends Component {

  constructor () {
    super()
    console.log('1 - Hello I\'m Constructor !')
    this.state = {
      content: 'Click me !'
    }
  }

  componentDidMount() {
    console.log('3 - Hello I\'m DidMount Hook !')
  }

  componentDidUpdate() {
    console.log('4/5 - Hello I\'m DidUpdate Hook !')
  }

  componentWillUnmount() {
    console.log('4/5 - Hello I\'m WillUnmount Hook !')
  }

  UnmountApp () {
    return unmountComponentAtNode(document.getElementById('root'))
  }

  render() {
    console.log('2 - Hello I\'m Render !')
    return (
      <div>
        <button onClick={() => { this.setState({ content: 'clicked' }) }}> {this.state.content}</button>
        <button onClick={this.UnmountApp.bind(this)}> Unmount App </button>
      </div>
    )
  }
}

export default LifeCycle
