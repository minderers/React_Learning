import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state;
  const { age } = location.state;
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome: {username}</h3>
      <h3>age:{age}</h3>
      <nav>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="setting"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
