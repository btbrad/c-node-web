import http from '../http/http'
import { useDispatch } from 'react-redux'


export function useGetTabList() {
  const dispatch = useDispatch()
  return () => {
    dispatch({
      type: 'load_start'
    })
    http.get('/topics?tab=all&page=1&limit=10').then(res => {
      console.log(res)
      if (res.data.success) {
        dispatch({
          type: 'load_finish',
          payload: res.data.data
        })
      }
    }).catch(error => {
      console.log(error)
    }) 
  }
}