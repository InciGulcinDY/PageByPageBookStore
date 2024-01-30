import React from 'react'
import ProductDetailImage from '../../components/ProductDetailImage/ProductDetailImage'
import BookDetailCard from '../../components/BooksDetailCard/BooksDetailCard'
import BooksDetailCard from '../../components/BooksDetailCard/BooksDetailCard'


type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-6'>
          <ProductDetailImage></ProductDetailImage>
        </div>
        <div className='col-6'>
          <BooksDetailCard></BooksDetailCard>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail