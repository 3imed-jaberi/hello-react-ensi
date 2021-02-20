import React from 'react'

const ChildOne = () => (<h1> Spinner </h1>)
const ChildTwo = () => (<h2> Content </h2>)

class ConditionalRendering extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true
    }
  }


  handleClick () {
    this.setState({ loading: !this.state.loading })
  }

  render() {
    return (
      <>
        <h1> Welcome to Conditional Rendering !</h1>
        <hr />
        <button onClick={this.handleClick.bind(this)}> Loading: {this.state.loading.toString()} </button>
        { this.state.loading ? <ChildOne /> : <ChildTwo /> }
      </>
    )
  }
}

export default ConditionalRendering
