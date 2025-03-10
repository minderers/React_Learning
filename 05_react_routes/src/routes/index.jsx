import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fan from "../pages/dashboard/Fan";
import Follow from "../pages/dashboard/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import NavBar from "../componments/NavBar";
import BlogList from "../componments/BlogList";
import BolgDetails from "../componments/BlogDetails";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:bookId" element={<Book bookId="123" />} />
        <Route path="/blog/:blogIndex" element={<BolgDetails />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Fan />} />
            <Route path="fan" element={<Fan />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
