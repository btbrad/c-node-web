import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'
import logo from '../../static/images/logo.png'

const { Header } = Layout

export default function Head() {
  return <Header>
    <Row>
      <Col span={8}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt='logo' />
          </Link>
        </div>
      </Col>
      <Col span={16}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Col>
    </Row>
    
  </Header>
}