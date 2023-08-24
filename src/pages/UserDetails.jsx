import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
const {userId} = useParams();
  return (
    <div style={{margin:'20px'}}>I am user {userId}</div>
  )
}

export default UserDetails