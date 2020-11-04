import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import topics from './reducers/topics'

const store = createStore(combineReducers({
  topics
}), applyMiddleware(thunk))

export default store