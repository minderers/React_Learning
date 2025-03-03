// LoginForm.js
import React, { useState } from "react";
import { useUser } from "./UserContext";

const LoginForm = () => {
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟登录验证
    if (username && password) {
      login(username);
      alert("登录成功！");
    } else {
      alert("请输入用户名和密码！");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>用户名：</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>密码：</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};

export default LoginForm;
