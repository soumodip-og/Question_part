import { useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [language, setLanguage] = useState("");
  const [result, setResult] = useState(null);

  const startQuiz = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setResult(null);
  };

  const finishQuiz = (data) => {
    setResult(data);
  };

  const restart = () => {
    setLanguage("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-3xl font-bold text-center mb-10">
        CodeMaster
      </h1>

      {!language && (
        <LanguageSelect onStart={startQuiz} />
      )}

      {language && !result && (
        <Quiz
          language={language}
          onFinish={finishQuiz}
        />
      )}

      {result && (
        <Result
          result={result}
          onRestart={restart}
        />
      )}

    </div>
  );
}

export default App;