import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import list from './reducer'

const store = createStore(combineReducers({
  list
}), applyMiddleware(thunk))

export default store