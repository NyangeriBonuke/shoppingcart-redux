import { combineReducers } from 'redux'
import cartSlice from '../features/reducers'

const rootReducer = combineReducers({
    cart: cartSlice
})

export default rootReducer