import React from 'react'
import IndexTab from './components/IndexTabs'
import TabList from './components/TabList'

import './index.less'

export default function Home() {
  return (
    <div>
      首页
      <IndexTab />
      <TabList />
    </div>
  )
}
