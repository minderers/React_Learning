// UserStatus.js
import React from "react";
import { useUser } from "./UserContext";

const UserStatus = () => {
  const { user } = useUser();

  return <div>{user ? <p>当前用户：{user.username}</p> : <p>未登录</p>}</div>;
};

export default UserStatus;
