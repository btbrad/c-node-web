import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { indexTabs } from '../../../router/routes'
import { Link, useLocation } from 'react-router-dom'
import { useChangeTopic} from '../../../store/actions'
import qs from 'qs'

function IndexTabs(props) {

  let {search} = useLocation()

  let {tab} = qs.parse(search.substr(1))
  let [selectedKey, setSelectedKey] = useState('0')

  const changeTopic = useChangeTopic()

  useEffect(() => {
    setSelectedKey(indexTabs.findIndex(item => item.tab === tab))
    changeTopic(tab)
  }, [tab])


  return (
    <Menu 
      mode='horizontal'
      defaultSelectedKeys={['0']}
      selectedKeys={[`${selectedKey}`]}
    >
      {
        indexTabs.map((item, index) => <Menu.Item key={index}>
          <Link to={`/?tab=${item.tab}&page=1`}>{item.name}</Link>
        </Menu.Item>)
      }
    </Menu>
  )
}

export default IndexTabs