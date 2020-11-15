import http from '../http/http'
import { useDispatch } from 'react-redux'


export function useGetTabList() {
  const dispatch = useDispatch()
  return () => {
    dispatch({
      type: 'load_start'
    })
    http.get('/tabData.json').then(res => {
      console.log(res)
      setTimeout(() => {
        dispatch({
          type: 'load_finish',
          payload: res.data.list
        })
      }, 2000);
    }).catch(error => {
      console.log(error)
    }) 
  }
}