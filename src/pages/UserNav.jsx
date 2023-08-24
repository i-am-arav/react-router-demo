import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const UserNav = () => {
  return (
    <>
        <Link style={{margin:'0 10px'}} to='/users/new'>New User</Link>
        <Link style={{margin:'0 10px'}} to='/users'>Users</Link>
        <Outlet />
    
    </>
  )
}

export default UserNav