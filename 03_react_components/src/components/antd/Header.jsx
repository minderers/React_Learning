import { useState } from "react";
import { HomeOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "./antd.css";
const items = [
  {
    label: "首页",
    key: "index",
    icon: <HomeOutlined />,
  },
  {
    label: "邮件",
    key: "msg",
    icon: <MailOutlined />,
  },
  {
    label: "设置",
    key: "setting",
    icon: <SettingOutlined />,
  },
];
const Header = () => {
  const [current, setCurrent] = useState("index");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="header">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          backgroundColor: "#eecbd6",
          paddingLeft: "100px",
        }}
      />
    </div>
  );
};
export default Header;
