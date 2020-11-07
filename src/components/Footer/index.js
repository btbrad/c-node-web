import React from 'react'
import { Affix, Layout } from 'antd'

const Footer = Layout.Footer

export default function Foot() {
  return (
    <Affix offsetBottom={0}>
      <Footer>
        <p style={{width: '200px', margin: '0 auto 0', textAlign: 'center'}}>Powered By React with ❤</p>
      </Footer>
    </Affix>
  )
}