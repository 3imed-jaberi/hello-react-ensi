import React from 'react'

function HomeLayout({ leftComponent, rightComponent }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          { leftComponent }
        </div>
        <div className="col-lg-9">
          <div className="row pt-3">
            { rightComponent }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
