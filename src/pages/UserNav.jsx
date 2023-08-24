import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const UserNav = () => {
const userName = 'Miller'
  return (
    <>
        <Link style={{margin:'0 10px'}} to='/users/new'>New User</Link>
        <Link style={{margin:'0 10px'}} to='/users'>Users</Link>
        <Outlet context={userName} />
    
    </>
  )
}

export default UserNav