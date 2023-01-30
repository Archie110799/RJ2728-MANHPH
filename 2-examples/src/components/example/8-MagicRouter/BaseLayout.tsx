import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

function BaseLayout({}: Props) {
  return (
    <div className='text-center'>
       <Outlet />
    </div>
  )
}

export default BaseLayout