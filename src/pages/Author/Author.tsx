import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import AuthorInfo from '../../layouts/AuthorInfo/AuthorInfo'

type Props = {}

const Author = (props: Props) => {
  return (
    <div className='container'>
        <AuthorInfo></AuthorInfo>
        <ProductCard></ProductCard>
    </div>
  )
}

export default Author