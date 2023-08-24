import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const UserDetails = () => {
const {userId} = useParams();
const [searchParams, setSearchParams] = useSearchParams({name: ''});
  return (
    <div style={{margin:'20px'}}>I am user {userId} {searchParams.get('name') && <span>My Username is {searchParams.get('name')}</span>}</div>
  )
}

export default UserDetails