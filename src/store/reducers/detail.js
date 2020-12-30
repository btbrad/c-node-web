import { DETAIL_LOADING_START, DETAIL_SET_ID, DETAIL_SET_CONTENT, DETAIL_LOADING_STOP } from '../actionTypes'

const defaultState = {
  loading: false,
  data: ''
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case DETAIL_LOADING_START: 
      return {...state, loading: true}
    case DETAIL_SET_CONTENT:
      return {...state, data: action.payload, loading:false }
    default:
      return {...state}
  }
}

export default reducer