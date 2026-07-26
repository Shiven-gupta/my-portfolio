import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    try {
      const snapshot = await getDocs(collection(db, "blogs"));

      const blogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogs(blogData);
    } catch (err) {
      console.error(err);
    }
  }

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "blogs", id));

      setBlogs((prev) => prev.filter((blog) => blog.id !== id));

      alert("✅ Blog deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete blog.");
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">My Blogs</h2>

      {blogs.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          No blogs found.
        </div>
      ) : (
        <div className="space-y-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold">
                {blog.title}
              </h3>

              <p className="text-blue-500 mt-2">
                {blog.category}
              </p>

              <p className="text-gray-500 mt-4">
                {blog.summary}
              </p>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => navigate(`/admin/edit/${blog.id}`)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                >
                  ✏ Edit
                </button>

                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                >
                  🗑 Delete
                </button>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}