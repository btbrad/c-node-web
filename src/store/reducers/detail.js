import { DETAIL_LOADING_START, DETAIL_SET_ID, DETAIL_SET_CONTENT } from '../actionTypes'

const defaultState = {
  loading: false,
  id: null,
  content: ''
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case DETAIL_LOADING_START: 
      return {...state, loading: true}
    case DETAIL_SET_ID:
      return {...state, id: action.payload}
    case DETAIL_SET_CONTENT:
      return {...state, content: action.payload}
    default:
      return {...state}
  }
}

export default reducer