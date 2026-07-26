import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Networking");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    loadBlog();
  }, []);

  async function loadBlog() {
    try {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const blog = docSnap.data();

        setTitle(blog.title || "");
        setCategory(blog.category || "Networking");
        setSummary(blog.summary || "");
        setContent(blog.content || "");
      } else {
        alert("Blog not found.");
        navigate("/dashboard");
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Error loading blog.");
      navigate("/dashboard");
    }
  }

  const updateBlog = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, "blogs", id), {
        title,
        category,
        summary,
        content,
      });

      alert("✅ Blog updated successfully!");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to update blog.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          Edit Blog
        </h1>

        <form onSubmit={updateBlog} className="space-y-6">

          <div>
            <label className="font-semibold block mb-2">
              Blog Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600"
            >
              <option>Networking</option>
              <option>Cisco</option>
              <option>Fortinet</option>
              <option>VMware</option>
              <option>Windows Server</option>
              <option>Microsoft 365</option>
              <option>Azure</option>
              <option>Linux</option>
              <option>SAP</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Summary
            </label>

            <textarea
              rows="3"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Blog Content
            </label>

            <textarea
              rows="15"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="flex gap-4">

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
            >
              💾 Update Blog
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}