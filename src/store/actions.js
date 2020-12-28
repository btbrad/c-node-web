import http from '../http/http'
import { useDispatch } from 'react-redux'


export function useGetTabList() {
  const dispatch = useDispatch()
  return () => {
    dispatch({
      type: 'load_start'
    })
    http.get('/topics').then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    }) 
  }
}