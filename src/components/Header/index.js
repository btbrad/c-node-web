import React from 'react'
import { Menu, Layout, Row, Col, Affix } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import './index.less'
import logo from '../../static/images/logo.png'
import routes from '../../router/routes'

const { Header } = Layout

export default function Head() {

  const { pathname } = useLocation()
  const currentKey = routes.filter(item => item.isNav).findIndex(item => item.path === pathname)

  return (
    <Affix offsetTop={0}>
      <Header>
        <Row>
          <Col span={4}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt='logo' />
              </Link>
            </div>
          </Col>
          <Col span={20}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${currentKey}`]}>
              {
                routes.filter(item => item.isNav).map((item, index) => <Menu.Item key={index}><Link to={item.path}>{item.name}</Link></Menu.Item>)
              }
              {/* <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
          </Col>
        </Row>
      </Header>
    </Affix>
  )
}