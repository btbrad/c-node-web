import React, { useEffect } from 'react'
import { List, Avatar, Row, Col } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'
import { useGetTabList } from '../../../store/actions'
import TopicTag from './TopicTag'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

function TabList() {

  const {topic, data, loading} = useSelector(state => state.topics)

  const getTabList = useGetTabList()

  useEffect(() => {
    getTabList()
  },[])

  console.log(topic, data, dayjs())

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
          <Row>
            <Col span={2}>
              <Link to={`/user/${item.user_id}`}>
                <Avatar size="small" icon={<UserOutlined />} />
              </Link>
            </Col>
            <Col span={20}>
              <TopicTag />
              <Link to={`/topic/${item.id}`}>{item.title}</Link>
            </Col>
            <Col>
              {dayjs().from(item.date)}
            </Col>
          </Row>
        </List.Item>)}
        loading={loading}
      >
      </List>
    </div>
  )
}

export default TabList