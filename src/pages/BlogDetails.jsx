import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase/firebase";

export default function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlog();
  }, [id]);

  async function loadBlog() {
    try {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBlog(docSnap.data());
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6">

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10">

        <Link
          to="/blogs"
          className="text-blue-600 hover:underline"
        >
          ← Back to Blogs
        </Link>

        <p className="mt-8 text-blue-500 font-semibold">
          {blog.category}
        </p>

        <h1 className="text-5xl font-bold mt-3">
          {blog.title}
        </h1>

        <p className="text-gray-500 mt-5">
          {blog.summary}
        </p>

        <hr className="my-8" />

        <div className="whitespace-pre-wrap leading-8 text-lg">
          {blog.content}
        </div>

      </div>

    </div>
  );
}