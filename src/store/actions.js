import http from '../http/http'
import { useDispatch } from 'react-redux'


export function useGetTabList() {
  const dispatch = useDispatch()
  return () => {
    dispatch({
      type: 'load_start'
    })
    http.get('/topics?page=1&tab=all&limit=10').then(res => {
      console.log('首页数据', res)
      if (res.data.success) {

        dispatch({
          type: 'load_stop',
          payload: res.data.data 
        })
      }
    }).catch(error => {
      console.log(error)
    }) 
  }
}