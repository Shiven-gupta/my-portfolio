// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react"; // ✅ REQUIRED

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log("Cursor at", { x: e.clientX, y: e.clientY }); // ✅ You can see output in DevTools
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-blue-500 opacity-70 mix-blend-difference transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    />
  );
}
