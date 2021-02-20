import React from 'react'
// import crossUid from 'cross-uid';

class ListRendering extends React.Component {
  constructor() {
    super()

    this.state = {
      compus: [
        'Ensi',
        'Isamm',
        'Esen',
        'ESC',
        'ISCAE'
      ]
    }
  }

  render() {
    // console.log(crossUid());
    return (
      <>
        <h1> Welcome to List Rendering !</h1>
        <hr />
        <ul>
          { 
            // this.state.compus.map((item, index) => (<li key={crossUid()}>{index + 1} - {item}</li>)) 
            this.state.compus.map((item, index) => (<li key={index}>{item}</li>))
          }
        </ul>
      </>
    )
  }
}

export default ListRendering
