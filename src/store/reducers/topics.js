import { TOPIC_LOADING_START, TOPIC_LOADING_FINISH, TOPIC_CHANGE_TOPIC } from '../actionTypes'

const defaultState = {
  topic: 'all',
  data: [],
  loading: false
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case TOPIC_LOADING_START: 
      return {...state, loading: true}
    case TOPIC_LOADING_FINISH:
      return {...state, data: action.payload, loading: false}
    case TOPIC_CHANGE_TOPIC:
      return {...state, topic: action.payload}
    default:  
      return state
  }
}

export default reducer