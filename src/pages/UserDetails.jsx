import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const UserDetails = () => {
const {userId} = useParams();
const data = useOutletContext();
  return (
    <div style={{margin:'20px'}}>I am user {userId} and this is Context data {data}</div>
  )
}

export default UserDetails