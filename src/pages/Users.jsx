import React from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();

    const handleNavigateClick = () => {
        setTimeout(() => {
            navigate('/about')
        }, 2000)
    }
  return <div style={{ margin: '20px' }}>Users List Page 
    <button style={{marginLeft:'8px'}} onClick={handleNavigateClick}> Goto About</button>
  </div>;
};

export default Users;
