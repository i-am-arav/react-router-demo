import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <>
        <Link style={{margin:'0 10px'}} to='/users/new'>New User</Link>
        <Link style={{margin:'0 10px'}} to='/users'>Users</Link>
        <Link style={{margin:'0 10px'}} to='/users/1'>Users 1</Link>
        <Link style={{margin:'0 10px'}} to='/users/2'>Users 2</Link>
    
    </>
  )
}

export default UserNav