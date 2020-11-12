import React from 'react'
import { Menu } from 'antd'
import { indexTabs } from '../../../router/routes'
import { Link } from 'react-router-dom'

function IndexTabs(props) {
  return (
    <Menu 
      mode='horizontal'
    >
      {
        indexTabs.map((item, index) => <Menu.Item key={index}>
          <Link>{item.name}</Link>
        </Menu.Item>)
      }
    </Menu>
  )
}

export default IndexTabs