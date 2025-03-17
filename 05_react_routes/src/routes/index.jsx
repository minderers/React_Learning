import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import DashBoard from "../pages/dashboard/DashBoard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fan from "../pages/dashboard/Fan";
import Follow from "../pages/dashboard/Follow";
import Book from "../pages/Book";
import BlogList from "../componments/BlogList";
import BlogDetails from "../componments/BlogDetails";
import Layout from "../pages/Layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<BlogList />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/blog/:blogIndex" element={<BlogDetails />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />}>
              <Route index element={<Fan />} />
              <Route path="fan" element={<Fan />} />
              <Route path="follow" element={<Follow />} />
            </Route>
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
