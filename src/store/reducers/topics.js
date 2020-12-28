const defaultState = {
  topic: 'all',
  data: [],
  loading: false
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'load_start': 
      return {...state, loading: true}
    case 'load_stop': 
      return {...state, loading: false, data: action.payload}
    default:  
      return state
  }
}

export default reducer