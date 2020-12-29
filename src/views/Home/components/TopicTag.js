import React from 'react'
import { Tag } from 'antd'
import { indexTabs } from '../../../router/routes'

function TopicTag(props) {

  const tag = indexTabs.filter(item => item.tab === props.tab)[0].name

  return (
    <Tag color="cyan">{tag}</Tag>
  )
}

export default TopicTag