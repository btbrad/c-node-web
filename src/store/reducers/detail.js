const defaultState = {
  loading: false,
  content: ''
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case 'loading_start': 
      return {...state, loading: true}
    default:
      return {...state}
  }
}

export default reducer