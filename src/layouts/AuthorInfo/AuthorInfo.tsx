import React from 'react'

type Props = {}

const AuthorInfo = (props: Props) => {
  return (
    <div className="card mb-3 border border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/assets/authorInfo.png" className="img-fluid rounded-start float-end" alt="author photo" style={{width:200}}/>
    </div>
    <div className="col-md-8 my-auto">
      <div className="card-body">
        <h5 className="card-title">Author Name</h5>
        <p className="card-text blockquote-footer fs-5">Quota This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default AuthorInfo