import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const BooksDetailCard = (props: Props) => {
  return (
    <div>

<div className="card">
  <div className="card-body">
    <h3 className="card-title">Book Title</h3>
    <h5 className="card-subtitle mb-2 text-body-secondary">Author Name</h5>
    <h6 className="card-text text-body-secondary">Publisher Name, NumberOfEdition</h6>
    <h6 className="card-text text-body-secondary">Category</h6>
    <h6 className="card-text text-body-secondary">English</h6>
    <h6 className="card-text text-body-secondary">153 pages</h6>
    <br></br>
    <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi nulla aut aspernatur dignissimos autem asperiores odit iure quasi totam?</p>
    <h4>100 tl</h4>

    <Link to="#" className="btn btn-success">
      Add to Cart
    </Link>
  </div>
</div>

    </div>
  )
}

export default BooksDetailCard