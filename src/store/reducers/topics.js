const defaultState = {
  topic: 'all',
  data: [],
  loading: false
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'load_start': 
      return {...state, loading: true}
    case 'load_finish':
      return {...state, data: action.payload, loading: false}
    case 'change_topic':
      return {...state, topic: action.payload}
    default:  
      return state
  }
}

export default reducer