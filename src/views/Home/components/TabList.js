import React, { useEffect } from 'react'
import { List } from 'antd'
import { useSelector } from 'react-redux'
import { useGetTabList } from '../../../store/actions'

function TabList() {

  const {topic, data, loading} = useSelector(state => state.topics)

  const getTabList = useGetTabList()

  useEffect(() => {
    getTabList()
  }, [])

  console.log(topic, data)

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.id}
          >
          {item.title}
        </List.Item>)}
        loading={loading}
      >
      </List>
    </div>
  )
}

export default TabList