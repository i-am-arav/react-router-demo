import React from "react";
import { useOutletContext } from "react-router-dom";

const Users = () => {
  const data = useOutletContext();
  return <div style={{ margin: "20px" }}>Users List Page {data}</div>;
};

export default Users;
