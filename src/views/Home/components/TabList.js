import React, { useEffect } from 'react'
import { Avatar, List, Image } from 'antd'
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
            <p className="row">
              <Avatar shape="square" src={<Image src={item.author.avatar_url} />}></Avatar>
              <span className="title">{item.title}</span>
              <span className="content" dangerouslySetInnerHTML={{__html: item.content}}></span>
            </p>
        </List.Item>)}
        loading={loading}
      >
      </List>
    </div>
  )
}

export default TabList