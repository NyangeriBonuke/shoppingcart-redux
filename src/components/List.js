import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/reducers'

const List = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            {product.name} 
                            <button onClick={() => dispatch(addItem(product))}>Add Item</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
