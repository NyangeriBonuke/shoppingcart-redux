import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, clearCart } from '../features/reducers'

const Cart = () => {
    const cartItemms = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
  return (
    <div>
        <ul>
            {
                cartItemms.map((item) => (
                    <li key={item.id}>
                        {item.name} - <button onClick={() => dispatch(removeItem(item))} >Remove Item</button>
                    </li>
                ))
            }
        </ul>
        <button onClick={() => dispatch(clearCart)} >Clear Cart</button>
    </div>
  )
}

export default Cart
