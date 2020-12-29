import React from 'react'
import Home from '../views/Home/Home'
import About from '../views/About/About'
import Start from '../views/Start/Start'
import TopicPage from '../views/topic/index'
import UserPage from '../views/user/index'
import NotFound from '../views/404/404'
import qs from 'qs'
import { Redirect } from 'react-router-dom'

const routes = [
  {
    name: '首页',
    path: '/',
    render: (props) => {
      let { location : {search} } = props
      let { tab, page } = qs.parse(search.substr(1))
      if (!tab && !page) {
        return <Redirect to={`/?tab=${indexTabs[0].tab}&page=1`} />
      } else if (tab && (!page || isNaN(page))) {  
        return <Redirect to={`/?tab=${tab}&page=1`} />
      }
      return <Home {...props} />
    },
    exact:true,
    isNav: true
  },
  {
    name: '快速开始',
    path: '/start',
    render: (props) => {
      return <Start {...props} />
    },
    isNav: true
  },
  {
    name: '关于我们',
    path: '/about',
    render: (props) => {
      return <About {...props} />
    },
    isNav: true
  },
  {
    name: '主题详情',
    path: '/topic/:id',
    exact: true,
    render: (props) => {
      return <TopicPage {...props} />
    }
  },
  {
    name: '用户详情',
    path: '/user/:id',
    exact: true,
    render: (props) => {
      return <UserPage {...props} />
    }
  },
  {
    name: '404',
    path: '',
    render: (props) => {
      return <NotFound {...props} />
    }
  }
]

const indexTabs = [
  {
    name: '全部',
    tab: 'all'
  },
  {
    name: '精华',
    tab: 'good'
  },
  {
    name: '分享',
    tab: 'share'
  },
  {
    name: '问答',
    tab: 'ask'
  },
  {
    name: '招聘',
    tab: 'job'
  },
  // {
  //   name: '测试',
  //   tab: 'dev'
  // }
]

export {routes, indexTabs}