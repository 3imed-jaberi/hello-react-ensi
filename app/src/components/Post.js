import React from 'react'

function Post({ id, title, completed }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src="http://placehold.it/700x400" alt="" />
        <div className="card-body">
          <h4 className="card-title">
            Item { id }
          </h4>
          <h5>{title}</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
        </div>
        <div className="card-footer">
          <div className={`alert alert-${completed ? 'success' : 'danger' }`}>
            {completed ? 'Done' : 'Wait'}  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
