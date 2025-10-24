// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="py-6 px-6 md:px-16 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-tight">DebateSphere</h1>
      <nav className="space-x-6 text-gray-600">
        <a href="#about" className="hover:text-gray-900 transition">
          About DebAI
        </a>
        <a href="#start" className="hover:text-gray-900 transition">
          Start Debating
        </a>
      </nav>
    </header>
  );
}
