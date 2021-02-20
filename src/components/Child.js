import React from 'react'

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  // <h1> Hello, I'm The Child ! </h1>
  render() {
    // console.log(this.props);
    return (
      <h1> Hello, {this.props.nameProps || 'I\'m The Child ' } ! </h1>
    )
  }
}

export { Child as default }
