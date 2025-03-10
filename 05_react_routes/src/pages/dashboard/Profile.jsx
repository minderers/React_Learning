import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ marginRight: "20px", marginTop: "20px" }}>
        <NavLink
          to="fan"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ display: "block", marginBottom: "10px" }}
        >
          Fan
        </NavLink>
        <NavLink
          to="follow"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ display: "block" }}
        >
          Follow
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
