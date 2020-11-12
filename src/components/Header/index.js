import React, { useState, useEffect } from 'react'
import { Menu, Layout, Row, Col, Affix } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import './index.less'
import logo from '../../static/images/logo.png'
import routes from '../../router/routes'

const { Header } = Layout

const navigators = routes.filter(item => item.isNav)

export default function Head() {

  const { pathname } = useLocation()

  const [currentKey, setCurrentKey] = useState(0)

  useEffect(() => {
    setCurrentKey(navigators.findIndex(item => item.path === pathname))
  }, [pathname])

  return (
    <Affix offsetTop={0}>
      <Header>
        <Row>
          <Col span={4} xs={8} sm={4}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt='logo' />
              </Link>
            </div>
          </Col>
          <Col span={20} xs={16} sm={20}>
            <Menu theme="dark" mode="horizontal" selectedKeys={[`${currentKey}`]}>
              {
                navigators.map((item, index) => <Menu.Item key={index}><Link to={item.path}>{item.name}</Link></Menu.Item>)
              }
            </Menu>
          </Col>
        </Row>
      </Header>
    </Affix>
  )
}