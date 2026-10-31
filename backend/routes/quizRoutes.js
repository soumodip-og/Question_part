const express = require("express");
const router = express.Router();

const questions = require("../data/questions");
const Result = require("../models/Result");

// Start quiz
router.get("/start/:language", (req, res) => {
  const language = req.params.language;

  const selectedQuestions = questions[language];

  if (!selectedQuestions) {
    return res.status(404).json({
      message: "Language not found"
    });
  }

  // Hide correct answers
  const quizQuestions = selectedQuestions.map((q, index) => ({
    id: index,
    question: q.question,
    options: q.options
  }));

  res.json(quizQuestions);
});


// Submit quiz
router.post("/submit", async (req, res) => {
  try {
    const { language, answers } = req.body;

    const selectedQuestions = questions[language];

    if (!selectedQuestions || !Array.isArray(answers)) {
      return res.status(400).json({
        message: "Invalid submission"
      });
    }

    if (
      answers.length !== 10 ||
      !answers.every(
        a => Number.isInteger(a.id) &&
        a.id >= 0 &&
        a.id < 10 &&
        typeof a.answer === "string"
      ) ||
      new Set(answers.map(a => a.id)).size !== 10
    ) {
      return res.status(400).json({
        message: "Please submit all 10 answers correctly"
      });
    }

    let score = 0;

    answers.forEach((item) => {
      if (
        selectedQuestions[item.id].answer === item.answer
      ) {
        score++;
      }
    });

    let badge;

    if (score >= 8) {
      badge = "Gold";
    } else if (score >= 5) {
      badge = "Silver";
    } else {
      badge = "Bronze";
    }

    const result = await Result.create({
      language,
      score,
      badge
    });

    res.json({
      score,
      total: 10,
      badge,
      resultId: result._id
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});


// Get previous results
router.get("/results", async (req, res) => {
  try {
    const results = await Result.find().sort({
      createdAt: -1
    });

    res.json(results);

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch results"
    });
  }
});

module.exports = router;