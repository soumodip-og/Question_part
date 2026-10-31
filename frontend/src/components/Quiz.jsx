import { useEffect, useState } from "react";
import axios from "axios";

function Quiz({ language, onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/quiz/start/${encodeURIComponent(language)}`
        );

        setQuestions(response.data);
      } catch (error) {
        setError("Unable to load questions.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [language]);

  const selectAnswer = (answer) => {
    setAnswers({
      ...answers,
      [current]: answer
    });
  };

  const nextQuestion = () => {
    if (current < 9) {
      setCurrent(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const submitQuiz = async () => {
    try {
      const formattedAnswers = Object.keys(answers).map((id) => ({
        id: Number(id),
        answer: answers[id]
      }));

      const response = await axios.post(
        "http://localhost:5000/api/quiz/submit",
        {
          language,
          answers: formattedAnswers
        }
      );

      onFinish(response.data);

    } catch (error) {
      setError("Unable to submit quiz. Try again.");
    }
  };

  if (loading) {
    return <p className="text-center">Loading questions...</p>;
  }

  if (error && questions.length === 0) {
    return <p className="text-center text-red-400">{error}</p>;
  }

  if (!questions.length) return null;

  const question = questions[current];

  return (
    <div className="max-w-2xl mx-auto">

      <div className="flex justify-between mb-5">
        <span>{language} Quiz</span>
        <span>{current + 1} / 10</span>
      </div>

      <div className="w-full bg-slate-800 h-2 rounded-full mb-8">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{
            width: `${((current + 1) / 10) * 100}%`
          }}
        />
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">

        <h2 className="text-xl font-bold mb-6">
          Q{current + 1}. {question.question}
        </h2>

        <div className="space-y-3">

          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => selectAnswer(option)}
              className={`w-full text-left p-4 rounded-lg border ${
                answers[current] === option
                  ? "border-blue-500 bg-blue-500/20"
                  : "border-slate-700 bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {option}
            </button>
          ))}

        </div>

        <div className="flex justify-between mt-8">

          <button
            onClick={previousQuestion}
            disabled={current === 0}
            className="px-5 py-3 rounded-lg bg-slate-700 disabled:opacity-30"
          >
            Previous
          </button>

          {current !== 9 ? (
            <button
              onClick={nextQuestion}
              disabled={!answers[current]}
              className="px-5 py-3 rounded-lg bg-blue-600 disabled:opacity-30"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitQuiz}
              disabled={Object.keys(answers).length !== 10}
              className="px-5 py-3 rounded-lg bg-green-600 disabled:opacity-30"
            >
              Submit Quiz
            </button>
          )}

        </div>

        {error && (
          <p className="text-red-400 mt-4">{error}</p>
        )}

      </div>

    </div>
  );
}

export default Quiz;