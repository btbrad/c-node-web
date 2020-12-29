import http from '../http/http'
import { useDispatch, useSelector } from 'react-redux'

export function useGetTabList() {
  const dispatch = useDispatch()
  const {topic} = useSelector(state => state.topics)
  return () => {
    dispatch({
      type: 'load_start'
    })
    http.get(`/topics?tab=${topic}&page=1&limit=10`).then(res => {
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

export function useChangeTopic(topic) {
  const dispatch = useDispatch()
  return topic => {
    dispatch({
      type: 'change_topic',
      payload: topic
    })
  }
}