import React, { useState } from "react";

function Main() {
  const questions = [
  {
    id: 1,
    question: "Which of the following is NOT a fundamental unit in the SI system?",
    options: ["Metre", "Kilogram", "Newton", "Second"],
  },
  {
    id: 2,
    question: "The dimensional formula for force is:",
    options: ["MLT<sup>-2</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "M<sup>0</sup>LT<sup>-1</sup>", "MLT<sup>-1</sup>"],
  },
  {
    id: 3,
    question: "Which physical quantity has the same dimensional formula as work?",
    options: ["Torque", "Momentum", "Pressure", "Surface tension"],
  },
  {
    id: 4,
    question: "The SI unit of luminous intensity is:",
    options: ["Candela", "Mole", "Kelvin", "Ampere"],
  },
  {
    id: 5,
    question: "The dimensional formula for Planck’s constant is:",
    options: ["ML<sup>2</sup>T<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>"],
  },
  {
    id: 6,
    question: "Which of the following quantities is dimensionless?",
    options: ["Strain", "Stress", "Force", "Momentum"],
  },
  {
    id: 7,
    question: "The dimensional formula for angular momentum is:",
    options: ["ML<sup>2</sup>T<sup>-1</sup>", "MLT<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-2</sup>"],
  },
  {
    id: 8,
    question: "The SI unit of pressure is:",
    options: ["N/m<sup>2</sup>", "kg/m<sup>2</sup>", "N/m", "kg/m"],
  },
  {
    id: 9,
    question: "Which of the following has the same dimensional formula as torque?",
    options: ["Work", "Momentum", "Force", "Impulse"],
  },
  {
    id: 10,
    question: "The dimensional formula for gravitational constant (G) is:",
    options: ["M<sup>-1</sup>L<sup>3</sup>T<sup>-2</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-2</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>"],
  },
  {
    id: 11,
    question: "The dimensional formula for thermal conductivity is:",
    options: ["MLT<sup>-3</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>"],
  },
  {
    id: 12,
    question: "Which of the following is a derived unit?",
    options: ["Metre", "Kilogram", "Newton", "Second"],
  },
  {
    id: 13,
    question: "The dimensional formula for surface tension is:",
    options: ["ML<sup>0</sup>T<sup>-2</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-1</sup>", "ML<sup>2</sup>T<sup>-1</sup>"],
  },
  {
    id: 14,
    question: "The dimensional formula for Boltzmann’s constant is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>", "MLT<sup>-1</sup>K<sup>-1</sup>"],
  },
  {
    id: 15,
    question: "Which of the following quantities has the same dimensional formula as latent heat?",
    options: ["Gravitational potential", "Pressure", "Force", "Momentum"],
  },
  {
    id: 16,
    question: "The dimensional formula for impulse is:",
    options: ["MLT<sup>-1</sup>", "MLT<sup>-2</sup>", "ML<sup>2</sup>T<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>"],
  },
  {
    id: 17,
    question: "The dimensional formula for angular velocity is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 18,
    question: "The dimensional formula for modulus of elasticity is:",
    options: ["ML<sup>-1</sup>T<sup>-2</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-2</sup>", "ML<sup>2</sup>T<sup>-1</sup>"],
  },
  {
    id: 19,
    question: "The dimensional formula for power is:",
    options: ["ML<sup>2</sup>T<sup>-3</sup>", "MLT<sup>-2</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-1</sup>"],
  },
  {
    id: 20,
    question: "Which of the following quantities has the same dimensional formula as pressure?",
    options: ["Stress", "Torque", "Momentum", "Force"],
  },
  {
    id: 21,
    question: "The dimensional formula for universal gas constant (R) is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>mol<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>mol<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>mol<sup>-1</sup>", "MLT<sup>-1</sup>K<sup>-1</sup>mol<sup>-1</sup>"],
  },
  {
    id: 22,
    question: "The dimensional formula for moment of inertia is:",
    options: ["ML<sup>2</sup>T<sup>0</sup>", "ML<sup>2</sup>T<sup>-1</sup>", "MLT<sup>-2</sup>", "ML<sup>2</sup>T<sup>-2</sup>"],
  },
  {
    id: 23,
    question: "The dimensional formula for frequency is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 24,
    question: "The dimensional formula for thermal capacity is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>", "MLT<sup>-1</sup>K<sup>-1</sup>"],
  },
  {
    id: 25,
    question: "The dimensional formula for entropy is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>", "MLT<sup>-1</sup>K<sup>-1</sup>"],
  },
  {
    id: 26,
    question: "Which of the following quantities has the same dimensional formula as work?",
    options: ["Torque", "Momentum", "Pressure", "Surface tension"],
  },
  {
    id: 27,
    question: "The dimensional formula for acceleration due to gravity is:",
    options: ["M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>"],
  },
  {
    id: 28,
    question: "The dimensional formula for velocity gradient is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 29,
    question: "The dimensional formula for decay constant is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 30,
    question: "The dimensional formula for refractive index is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 31,
    question: "The dimensional formula for relative density is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 32,
    question: "The dimensional formula for solid angle is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 33,
    question: "The dimensional formula for relative permittivity is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 34,
    question: "The dimensional formula for relative permeability is:",
    options: ["M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>", "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>"],
  },
  {
    id: 35,
    question: "The dimensional formula for gravitational potential is:",
    options: ["M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>2</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>"],
  },
  {
    id: 36,
    question: "The dimensional formula for latent heat is:",
    options: ["M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>2</sup>T<sup>-1</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>", "M<sup>0</sup>L<sup>1</sup>T<sup>-1</sup>"],
  },
  {
    id: 37,
    question: "The dimensional formula for solar constant is:",
    options: ["ML<sup>0</sup>T<sup>-3</sup>", "ML<sup>2</sup>T<sup>-3</sup>", "MLT<sup>-3</sup>", "ML<sup>2</sup>T<sup>-2</sup>"],
  },
  {
    id: 38,
    question: "The dimensional formula for thermal resistance is:",
    options: ["M<sup>-1</sup>L<sup>-2</sup>T<sup>3</sup>K", "M<sup>-1</sup>L<sup>-2</sup>T<sup>2</sup>K", "M<sup>-1</sup>L<sup>-1</sup>T<sup>3</sup>K", "M<sup>-1</sup>L<sup>-1</sup>T<sup>2</sup>K"],
  },
  {
    id: 39,
    question: "The dimensional formula for enthalpy is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-2</sup>", "ML<sup>2</sup>T<sup>-3</sup>", "MLT<sup>-1</sup>"],
  },
  {
    id: 40,
    question: "The dimensional formula for Stefan’s constant is:",
    options: ["MT<sup>-3</sup>K<sup>-4</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-4</sup>", "MLT<sup>-3</sup>K<sup>-4</sup>", "ML<sup>2</sup>T<sup>-2</sup>K<sup>-4</sup>"],
  },
  {
    id: 41,
    question: "The dimensional formula for Planck’s constant is:",
    options: ["ML<sup>2</sup>T<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>"],
  },
  {
    id: 42,
    question: "The dimensional formula for specific heat is:",
    options: ["M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>"],
  },
  {
    id: 43,
    question: "The dimensional formula for universal gas constant is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>mol<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>mol<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>mol<sup>-1</sup>", "MLT<sup>-1</sup>K<sup>-1</sup>mol<sup>-1</sup>"],
  },
  {
    id: 44,
    question: "The dimensional formula for Boltzmann’s constant is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>", "MLT<sup>-1</sup>K<sup>-1</sup>"],
  },
  {
    id: 45,
    question: "The dimensional formula for thermal conductivity is:",
    options: ["MLT<sup>-3</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>"],
  },
  {
    id: 46,
    question: "The dimensional formula for thermal resistance is:",
    options: ["M<sup>-1</sup>L<sup>-2</sup>T<sup>3</sup>K", "M<sup>-1</sup>L<sup>-2</sup>T<sup>2</sup>K", "M<sup>-1</sup>L<sup>-1</sup>T<sup>3</sup>K", "M<sup>-1</sup>L<sup>-1</sup>T<sup>2</sup>K"],
  },
  {
    id: 47,
    question: "The dimensional formula for enthalpy is:",
    options: ["ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-2</sup>", "ML<sup>2</sup>T<sup>-3</sup>", "MLT<sup>-1</sup>"],
  },
  {
    id: 48,
    question: "The dimensional formula for Stefan’s constant is:",
    options: ["MT<sup>-3</sup>K<sup>-4</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-4</sup>", "MLT<sup>-3</sup>K<sup>-4</sup>", "ML<sup>2</sup>T<sup>-2</sup>K<sup>-4</sup>"],
  },
  {
    id: 49,
    question: "The dimensional formula for Planck’s constant is:",
    options: ["ML<sup>2</sup>T<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>", "MLT<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>"],
  },
  {
    id: 50,
    question: "The dimensional formula for specific heat is:",
    options: ["M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>", "MLT<sup>-2</sup>K<sup>-1</sup>", "ML<sup>2</sup>T<sup>-3</sup>K<sup>-1</sup>"],
  },
];

const answers = [
  { id: 1, answer: "Newton" },
  { id: 2, answer: "MLT<sup>-2</sup>" },
  { id: 3, answer: "Torque" },
  { id: 4, answer: "Candela" },
  { id: 5, answer: "ML<sup>2</sup>T<sup>-1</sup>" },
  { id: 6, answer: "Strain" },
  { id: 7, answer: "ML<sup>2</sup>T<sup>-1</sup>" },
  { id: 8, answer: "N/m<sup>2</sup>" },
  { id: 9, answer: "Work" },
  { id: 10, answer: "M<sup>-1</sup>L<sup>3</sup>T<sup>-2</sup>" },
  { id: 11, answer: "MLT<sup>-3</sup>K<sup>-1</sup>" },
  { id: 12, answer: "Newton" },
  { id: 13, answer: "ML<sup>0</sup>T<sup>-2</sup>" },
  { id: 14, answer: "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>" },
  { id: 15, answer: "Gravitational potential" },
  { id: 16, answer: "MLT<sup>-1</sup>" },
  { id: 17, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>" },
  { id: 18, answer: "ML<sup>-1</sup>T<sup>-2</sup>" },
  { id: 19, answer: "ML<sup>2</sup>T<sup>-3</sup>" },
  { id: 20, answer: "Stress" },
  { id: 21, answer: "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>mol<sup>-1</sup>" },
  { id: 22, answer: "ML<sup>2</sup>T<sup>0</sup>" },
  { id: 23, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>" },
  { id: 24, answer: "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>" },
  { id: 25, answer: "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>" },
  { id: 26, answer: "Torque" },
  { id: 27, answer: "M<sup>0</sup>L<sup>1</sup>T<sup>-2</sup>" },
  { id: 28, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>" },
  { id: 29, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>-1</sup>" },
  { id: 30, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>" },
  { id: 31, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>" },
  { id: 32, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>" },
  { id: 33, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>" },
  { id: 34, answer: "M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>" },
  { id: 35, answer: "M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>" },
  { id: 36, answer: "M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>" },
  { id: 37, answer: "ML<sup>0</sup>T<sup>-3</sup>" },
  { id: 38, answer: "M<sup>-1</sup>L<sup>-2</sup>T<sup>3</sup>K" },
  { id: 39, answer: "ML<sup>2</sup>T<sup>-2</sup>" },
  { id: 40, answer: "MT<sup>-3</sup>K<sup>-4</sup>" },
  { id: 41, answer: "ML<sup>2</sup>T<sup>-1</sup>" },
  { id: 42, answer: "M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>" },
  { id: 43, answer: "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>mol<sup>-1</sup>" },
  { id: 44, answer: "ML<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>" },
  { id: 45, answer: "MLT<sup>-3</sup>K<sup>-1</sup>" },
  { id: 46, answer: "M<sup>-1</sup>L<sup>-2</sup>T<sup>3</sup>K" },
  { id: 47, answer: "ML<sup>2</sup>T<sup>-2</sup>" },
  { id: 48, answer: "MT<sup>-3</sup>K<sup>-4</sup>" },
  { id: 49, answer: "ML<sup>2</sup>T<sup>-1</sup>" },
  { id: 50, answer: "M<sup>0</sup>L<sup>2</sup>T<sup>-2</sup>K<sup>-1</sup>" },
];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleOptionSelect = (questionId, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const checkAnswers = () => {
    let correctCount = 0;
    answers.forEach((answer) => {
      if (selectedAnswers[answer.id] === answer.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const startQuiz = () => {
    setQuizStarted(true); // Start the quiz when the button is clicked
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {!quizStarted ? (
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={startQuiz}
            className="bg-blue-600 text-white px-6 py-3 rounded text-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <>
          {showResults && (
            <div className="sticky top-0 z-50 w-full bg-white shadow-md mb-4">
              <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <div className="text-lg font-semibold">
                  Your score: <span className="text-blue-600">{score}</span> / {questions.length}
                  <div className="text-sm text-gray-600">
                    ({((score / questions.length) * 100).toFixed(1)}%)
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-4">
            {questions.map((q) => (
              <div key={q.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <p
                  className="text-lg font-semibold mb-3 text-gray-800"
                  dangerouslySetInnerHTML={{ __html: `<span class="text-blue-600 mr-2">${q.id}.</span>${q.question}` }}
                ></p>
                <div className="grid gap-2">
                  {q.options.map((option) => (
                    <div
                      key={option}
                      className={`flex items-center p-3 rounded border cursor-pointer hover:bg-blue-50 transition-colors ${
                        selectedAnswers[q.id] === option ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                    >
                      <input
                        type="radio"
                        id={`${q.id}-${option}`}
                        name={`question-${q.id}`}
                        value={option}
                        checked={selectedAnswers[q.id] === option}
                        onChange={() => handleOptionSelect(q.id, option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <label
                        htmlFor={`${q.id}-${option}`}
                        className="ml-3 text-base cursor-pointer flex-grow"
                        dangerouslySetInnerHTML={{ __html: option }}
                      ></label>
                    </div>
                  ))}
                </div>
                {showResults && (
                  <div className="mt-3 p-3 rounded">
                    {selectedAnswers[q.id] === answers.find((a) => a.id === q.id).answer ? (
                      <div className="flex items-center text-green-600 text-base">
                        ✅ <span className="ml-2 font-medium">Correct!</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-600 text-base">
                        ❌ <span className="ml-2 font-medium">Correct answer: <span dangerouslySetInnerHTML={{ __html: answers.find((a) => a.id === q.id).answer }}></span></span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 bg-white p-4 border-t mt-6 flex justify-center items-center">
            <button
              onClick={checkAnswers}
              className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Check Answers
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
