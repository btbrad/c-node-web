import React from 'react'
import Home from '../views/Home/Home'
import About from '../views/About/About'
import Start from '../views/Start/Start'
import NotFound from '../views/404/404'

const routes = [
  {
    name: '首页',
    path: '/',
    render: (props) => {
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
    name: '404',
    path: '',
    render: (props) => {
      return <NotFound {...props} />
    }
  }
]

export default routes