import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetTopicDetail } from '../../store/actions'
import { useSelector } from 'react-redux'
import { Card } from 'antd'

import './index.less'

export default function DetailPage() {

  const { loading, data } = useSelector(state => state.detail)

  const {id} = useParams()

  const getTopicDetail = useGetTopicDetail()

  useEffect(() => {
    getTopicDetail(id)
  }, [id])

  return (
    <div>
      主题详情
      <Card loading={loading} title={data.title} style={{ width: '100%' }}>
        <div className="content" dangerouslySetInnerHTML={{__html: data.content}}></div>
      </Card>
    </div>
  )
}