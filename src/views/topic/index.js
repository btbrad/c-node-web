import React from 'react'
import { useLocation } from 'react-router-dom'


export default function UserPage() {

  const { pathname } = useLocation()

  const id = pathname.split('/')[2]

  console.log(id)

  return (
    <div>主题详情</div>
  )
}