import { Layout } from "antd";
import Header from "./Header";
import Content from "./Content";
import { Footer } from "antd/es/layout/layout";
const layoutStyle = {
  borderRadius: 8,
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#e8ccd6",
  fontWeight: "bold",
  fontSize: "26px",
};

const HomePage = () => {
  return (
    <Layout style={layoutStyle}>
      <Header></Header>
      <Content></Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};
export default HomePage;
