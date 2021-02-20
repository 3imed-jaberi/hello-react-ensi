import React, { Fragment, Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <> {/* <Fragment></Fragment> */}
        <h1> Hello, I'm The Parent ! </h1>
        <Child name='World' />
      </>
    )
  }
}

export { Parent as default }
