import React from 'react'
import CartItemCard from '../../components/CartItemCard/CartItemCard'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div className='container'>
      <CartItemCard></CartItemCard>
    </div>
  )
}

export default Cart