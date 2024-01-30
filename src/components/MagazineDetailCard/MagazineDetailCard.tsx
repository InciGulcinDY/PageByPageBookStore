import React from 'react'

type Props = {}

const MagazineDetailCard = (props: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Magazine Title</h4>
          <h5 className="card-subtitle mb-2 text-body-secondary">
            Author Name
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Category</h6>

          <p className="card-text">Number of Page</p>
          <p className="card-text">Publisher / Number of Edition</p>
          <h4 className="card-title">100 tl</h4>
          <button className="btn btn-outline-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default MagazineDetailCard