import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Newuser from './pages/Newuser';
import UserDetails from './pages/UserDetails';
import UserNav from './pages/UserNav';
import Users from './pages/Users';

const UserRoutes = () => {
  return (
    <>
    <UserNav />    
    <Routes>
        
        <Route path='/'  element={<Users />} />
        <Route path='/:userId' element={<UserDetails />} />
        <Route path='new' element={<Newuser />} />
    </Routes>
    </>

  )
}

export default UserRoutes