import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar } from "antd";
import "../css/nav.css";

const NavBar = () => {
  const location = useLocation();
  const { username } = location.state || {};
  const { image } = location.state || {};

  return (
    <nav className="nav">
      <div className="z"></div>
      <div className="z">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about?name=zhangsan&age=20"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>
        <NavLink
          to="/book/123"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Book
        </NavLink>
      </div>
      <div className="avatar z">
        {image && <Avatar src={image} style={{ width: 32 }} />}
        <div className="name">{username}</div>
      </div>
    </nav>
  );
};

export default NavBar;
