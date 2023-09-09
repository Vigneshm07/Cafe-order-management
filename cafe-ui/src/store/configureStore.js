import { createStore , combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import orderReducer from '../reducers/orderReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            order : orderReducer
        }),
        applyMiddleware(thunk)
    )
    return store
}

export default configureStore