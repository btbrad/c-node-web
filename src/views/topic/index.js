import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetTopicDetail, useSetTopicDetail } from '../../store/actions'

export default function DetailPage() {

  const { pathname } = useLocation()

  const id = pathname.split('/')[2]

  console.log(id)

  const setTopicDetail = useSetTopicDetail()
  setTopicDetail(id)

  const getTopicDetail = useGetTopicDetail()

  useEffect(() => {
    getTopicDetail()
  }, [id])

  return (
    <div>主题详情</div>
  )
}