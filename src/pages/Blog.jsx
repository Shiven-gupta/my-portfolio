import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    const snapshot = await getDocs(collection(db, "blogs"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setBlogs(data);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (

            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold">
                {blog.title}
              </h2>

              <p className="text-blue-500 mt-2">
                {blog.category}
              </p>

              <p className="text-gray-500 mt-4">
                {blog.summary}
              </p>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Read More →
              </Link>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}