// src/App.js

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

// Admin Pages
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import CreateBlog from "./admin/CreateBlog";
import EditBlog from "./admin/EditBlog";

export default function App() {
  return (
    <Routes>
      {/* Portfolio */}
      <Route path="/" element={<Home />} />

      {/* Public Blog */}
      <Route path="/blogs" element={<Blog />} />

      {/* Admin */}
      <Route path="/admin" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin/create" element={<CreateBlog />} />
      <Route path="/admin/edit/:id" element={<EditBlog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
    </Routes>
  );
}