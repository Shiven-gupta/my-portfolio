import { useState } from "react";
import axios from "axios";
import { MessageCircle } from "lucide-react"; // You can use any icon

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false); // Toggle chat visibility

  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const res = await axios.post("https://shiven-chatbot-backend.onrender.com/chat", { message: input });

      setMessages((prev) => [
        ...prev,
        { role: "user", text: input },
        { role: "bot", text: res.data.reply },
      ]);
      setInput("");
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  return (
    
    <div className="fixed bottom-4 right-4 z-[9999]">
      {/* Floating Icon Button */}
      
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full shadow-md bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition"
      >
        <MessageCircle size={20} />
      </button>

      {/* Chat Window */}
      
      {open && (
        <div className="mt-2 w-80 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-lg p-4 transition-all duration-300">
          <div className="h-48 overflow-y-auto mb-2 space-y-1 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${
                  m.role === "user" ? "text-right text-blue-700 dark:text-blue-400" : "text-left text-gray-700 dark:text-gray-300"
                }`}
              >
                <strong>{m.role === "user" ? "You" : "Bot"}:</strong> {m.text}
              </div>
            ))}
          </div>
          <div className="mb-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 p-2 rounded">
      ⚠️ This chatbot is in <strong>beta</strong>. It may sometimes provide incorrect or incomplete answers.
         </div>
          <div className="flex gap-2">
            <input
              className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 rounded text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
