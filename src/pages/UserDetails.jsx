import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
const {userId, userName} = useParams()
  return (
    <div style={{margin:'20px'}}>I am user {userId} {userName}</div>
  )
}

export default UserDetails