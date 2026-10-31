const questions = {
  JavaScript: [
    {
      question: "Which keyword declares a variable?",
      options: ["var", "int", "string", "define"],
      answer: "var"
    },
    {
      question: "Which method prints output?",
      options: ["print()", "console.log()", "echo()", "write()"],
      answer: "console.log()"
    },
    {
      question: "Which data type is not primitive?",
      options: ["Number", "String", "Boolean", "Object"],
      answer: "Object"
    },
    {
      question: "What does === check?",
      options: [
        "Value only",
        "Type only",
        "Value and type",
        "Nothing"
      ],
      answer: "Value and type"
    },
    {
      question: "Which method adds an item to an array?",
      options: ["push()", "pop()", "shift()", "slice()"],
      answer: "push()"
    },
    {
      question: "Which keyword creates a constant?",
      options: ["var", "let", "const", "static"],
      answer: "const"
    },
    {
      question: "What is the result of typeof 'Hello'?",
      options: ["number", "string", "boolean", "object"],
      answer: "string"
    },
    {
      question: "Which symbol is used for comments?",
      options: ["//", "#", "<!--", "**"],
      answer: "//"
    },
    {
      question: "Which method converts JSON into an object?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.convert()",
        "JSON.object()"
      ],
      answer: "JSON.parse()"
    },
    {
      question: "Which function executes after a delay?",
      options: [
        "setInterval()",
        "setTimeout()",
        "delay()",
        "wait()"
      ],
      answer: "setTimeout()"
    }
  ],

  Python: [
    {
      question: "Which function displays output?",
      options: ["echo()", "print()", "console.log()", "show()"],
      answer: "print()"
    },
    {
      question: "Which symbol is used for comments?",
      options: ["//", "#", "/*", "--"],
      answer: "#"
    },
    {
      question: "Which data type stores True or False?",
      options: ["int", "str", "bool", "list"],
      answer: "bool"
    },
    {
      question: "Which keyword defines a function?",
      options: ["function", "def", "fun", "define"],
      answer: "def"
    },
    {
      question: "Which collection is ordered and mutable?",
      options: ["Tuple", "Set", "List", "String"],
      answer: "List"
    },
    {
      question: "What is the output of 2 ** 3?",
      options: ["6", "8", "9", "5"],
      answer: "8"
    },
    {
      question: "Which method adds an item to a list?",
      options: ["add()", "push()", "append()", "insertEnd()"],
      answer: "append()"
    },
    {
      question: "Which keyword starts a conditional statement?",
      options: ["when", "if", "check", "case"],
      answer: "if"
    },
    {
      question: "Which function returns the length?",
      options: ["size()", "count()", "length()", "len()"],
      answer: "len()"
    },
    {
      question: "Which keyword creates a class?",
      options: ["object", "class", "struct", "create"],
      answer: "class"
    }
  ]
};

module.exports = questions;