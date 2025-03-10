import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import users from "../data/users";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const user = users.find(
      (u) => u.name === values.username && u.password === values.password
    );

    if (user) {
      // 登录成功后跳转到首页，并传递用户信息
      navigate("/dashboard", {
        state: { username: user.name, image: user.image },
      });
    } else {
      // 登录失败，显示错误消息
      message.error("用户名或密码错误");
    }
  };
  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#7799cc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    color: "#fff",
  };

  const titleStyle = {
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "20px",
    color: "#fff",
  };
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>登录页面</h2>
      <Form onFinish={handleLogin} layout="vertical">
        <Form.Item
          name="username"
          label="用户名"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
