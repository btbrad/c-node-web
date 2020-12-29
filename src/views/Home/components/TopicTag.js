import React from 'react'
import { Tag } from 'antd'
import { indexTabs } from '../../../router/routes'

function TopicTag(props) {

  const aTab = props.tab || 'share'

  const tag = indexTabs.filter(item => item.tab === aTab)[0].name

  return (
    <Tag color="cyan">{tag}</Tag>
  )
}

export default TopicTag