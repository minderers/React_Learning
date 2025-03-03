// LogoutButton.js
import React from "react";
import { useUser } from "./UserContext";

const LogoutButton = () => {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
    alert("已登出！");
  };

  return <button onClick={handleLogout}>登出</button>;
};

export default LogoutButton;
