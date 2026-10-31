function Result({ result, onRestart }) {

  const badgeDetails = {
    Bronze: {
      emoji: "🥉",
      color: "text-orange-400",
      message: "Keep Learning!"
    },

    Silver: {
      emoji: "🥈",
      color: "text-gray-300",
      message: "Great Work!"
    },

    Gold: {
      emoji: "🥇",
      color: "text-yellow-400",
      message: "Excellent Performance!"
    }
  };

  const badge = badgeDetails[result.badge];

  return (
    <div className="max-w-lg mx-auto text-center bg-slate-900 border border-slate-800 p-8 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Quiz Completed!
      </h2>

      <div className="text-7xl mb-4">
        {badge.emoji}
      </div>

      <h3 className={`text-3xl font-bold ${badge.color}`}>
        {result.badge} Badge
      </h3>

      <p className="text-gray-400 mt-3">
        {badge.message}
      </p>

      <div className="my-8">
        <p className="text-gray-400">Your Score</p>

        <h1 className="text-5xl font-bold mt-2">
          {result.score}/10
        </h1>
      </div>

      <button
        onClick={onRestart}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold"
      >
        Try Another Quiz
      </button>

    </div>
  );
}

export default Result;