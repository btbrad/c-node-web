import http from '../http/http'
import { useDispatch, useSelector } from 'react-redux'
import { TOPIC_LOADING_START, TOPIC_LOADING_FINISH, TOPIC_CHANGE_TOPIC, DETAIL_LOADING_START, DETAIL_SET_ID, DETAIL_SET_CONTENT } from './actionTypes'

export function useGetTabList() {
  const dispatch = useDispatch()
  const {topic} = useSelector(state => state.topics)
  return () => {
    dispatch({
      type: TOPIC_LOADING_START
    })
    http.get(`/topics?tab=${topic}&page=1&limit=10`).then(res => {
      console.log(res)
      if (res.data.success) {
        dispatch({
          type: TOPIC_LOADING_FINISH,
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
      type: TOPIC_CHANGE_TOPIC,
      payload: topic
    })
  }
}


export function useGetTopicDetail() {
  const dispatch = useDispatch()
  return (id) => {
    dispatch({
      type: DETAIL_LOADING_START
    })
    http.get(`/topic/${id}`).then(res => {
      console.log(res)
      if (res.data.success) {
        dispatch({
          type: DETAIL_SET_CONTENT,
          payload: res.data.data
        })
      }
    })
  }   
}