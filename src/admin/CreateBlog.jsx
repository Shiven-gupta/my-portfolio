import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Networking");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const publishBlog = async (e) => {
    e.preventDefault();

    if (!title || !summary || !content) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        category,
        summary,
        content,
        createdAt: serverTimestamp(),
        published: true,
      });

      alert("✅ Blog published successfully!");

      setTitle("");
      setCategory("Networking");
      setSummary("");
      setContent("");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to publish blog.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          Create New Blog
        </h1>

        <form onSubmit={publishBlog} className="space-y-6">

          {/* Title */}
          <div>
            <label className="font-semibold block mb-2">
              Blog Title
            </label>

            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Category */}
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

          {/* Summary */}
          <div>
            <label className="font-semibold block mb-2">
              Summary
            </label>

            <textarea
              rows="3"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Short description..."
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Content */}
          <div>
            <label className="font-semibold block mb-2">
              Blog Content
            </label>

            <textarea
              rows="15"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your article here..."
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
          >
            Publish Blog
          </button>

        </form>

      </div>
    </div>
  );
}