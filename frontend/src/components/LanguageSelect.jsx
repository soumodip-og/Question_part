import { useState } from "react";

function LanguageSelect({ onStart }) {
  const [language, setLanguage] = useState("JavaScript");

  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++"
  ];

  return (
    <div className="max-w-xl mx-auto text-center">

      <h2 className="text-2xl font-bold mb-3">
        Test Your Coding Knowledge
      </h2>

      <p className="text-gray-400 mb-8">
        Select a programming language to begin.
      </p>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 mb-6"
      >
        {languages.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        onClick={() => onStart(language)}
        className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-lg font-bold"
      >
        Start Quiz
      </button>

    </div>
  );
}

export default LanguageSelect;