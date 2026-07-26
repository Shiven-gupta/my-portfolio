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
import ProtectedRoute from "./admin/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Portfolio */}
      <Route path="/" element={<Home />} />

      {/* Public Blog */}
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />

      {/* Login */}
      <Route path="/admin" element={<Login />} />

      {/* Protected Admin Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/create"
        element={
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/edit/:id"
        element={
          <ProtectedRoute>
            <EditBlog />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}