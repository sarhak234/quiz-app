import React, { useState } from 'react';

function main() {
    const questions = [
  {
    id: 1,
    question: "The root 'Bio' refers to:",
    options: ["Life", "Earth", "Mind", "Time"],
  },
  {
    id: 2,
    question: "What does the root 'Geo' mean?",
    options: ["Earth", "Sky", "Water", "Light"],
  },
  {
    id: 3,
    question: "The root 'Chron' in 'Chronology' refers to:",
    options: ["Time", "Space", "Mind", "Energy"],
  },
  {
    id: 4,
    question: "The root 'Aqua' or 'Aque' relates to:",
    options: ["Water", "Air", "Earth", "Fire"],
  },
  {
    id: 5,
    question: "What does the root 'Ped' mean in 'Pedestrian'?",
    options: ["Foot", "Hand", "Child", "Mind"],
  },
  {
    id: 6,
    question: "The root 'Therm' in 'Thermometer' means:",
    options: ["Heat", "Light", "Cold", "Pressure"],
  },
  {
    id: 7,
    question: "What does the root 'Port' mean?",
    options: ["Carry", "Break", "Build", "Think"],
  },
  {
    id: 8,
    question: "The root 'Dict' in 'Dictate' means:",
    options: ["Speak", "Write", "Listen", "Read"],
  },
  {
    id: 9,
    question: "The root 'Graph' refers to:",
    options: ["Write", "Draw", "Speak", "Move"],
  },
  {
    id: 10,
    question: "What does the root 'Mater' or 'Matri' mean?",
    options: ["Mother", "Father", "Child", "Brother"],
  },
  {
    id: 11,
    question: "The root 'Pater' or 'Patri' means:",
    options: ["Father", "Mother", "Sibling", "Friend"],
  },
  {
    id: 12,
    question: "The root 'Bene' in 'Benevolent' means:",
    options: ["Good", "Evil", "Strong", "Fast"],
  },
  {
    id: 13,
    question: "What does the root 'Mal' mean?",
    options: ["Bad", "Good", "Soft", "Bright"],
  },
  {
    id: 14,
    question: "The root 'Logy' in 'Biology' means:",
    options: ["Study", "Life", "System", "Energy"],
  },
  {
    id: 15,
    question: "What does the root 'Cred' mean?",
    options: ["Believe", "Create", "Build", "Teach"],
  },
  {
    id: 16,
    question: "The root 'Manu' in 'Manual' refers to:",
    options: ["Hand", "Foot", "Machine", "Mind"],
  },
  {
    id: 17,
    question: "The root 'Vid' or 'Vis' means:",
    options: ["See", "Hear", "Speak", "Feel"],
  },
  {
    id: 18,
    question: "The root 'Phon' in 'Telephone' refers to:",
    options: ["Sound", "Light", "Distance", "Signal"],
  },
  {
    id: 19,
    question: "The root 'Hydro' or 'Hydra' refers to:",
    options: ["Water", "Air", "Fire", "Earth"],
  },
  {
    id: 20,
    question: "What does the root 'Auto' in 'Autonomous' mean?",
    options: ["Self", "Other", "Machine", "Fast"],
  },
  {
    id: 21,
    question: "The root 'Mort' in 'Mortal' means:",
    options: ["Death", "Life", "Soul", "Mind"],
  },
  {
    id: 22,
    question: "The root 'Scrib' or 'Script' means:",
    options: ["Write", "Draw", "Speak", "Move"],
  },
  {
    id: 23,
    question: "What does the root 'Phil' mean?",
    options: ["Love", "Hate", "Fear", "Power"],
  },
  {
    id: 24,
    question: "The root 'Poly' in 'Polygon' refers to:",
    options: ["Many", "Few", "Large", "Small"],
  },
  {
    id: 25,
    question: "The root 'Luc' or 'Lum' in 'Illuminate' refers to:",
    options: ["Light", "Dark", "Fire", "Energy"],
  },
  {
    id: 26,
    question: "What does the root 'Cide' in 'Pesticide' mean?",
    options: ["Kill", "Grow", "Build", "Protect"],
  },
  {
    id: 27,
    question: "The root 'Omni' in 'Omnipresent' means:",
    options: ["All", "One", "None", "Some"],
  },
  {
    id: 28,
    question: "The root 'Anti' in 'Antibiotic' means:",
    options: ["Against", "For", "With", "Between"],
  },
  {
    id: 29,
    question: "The root 'Theo' in 'Theology' refers to:",
    options: ["God", "Earth", "Time", "Life"],
  },
  {
    id: 30,
    question: "What does the root 'Chron' in 'Anachronism' mean?",
    options: ["Time", "Place", "Order", "Memory"],
  }
];
      const answers = [
  { id: 1, answer: "Life" },
  { id: 2, answer: "Earth" },
  { id: 3, answer: "Time" },
  { id: 4, answer: "Water" },
  { id: 5, answer: "Foot" },
  { id: 6, answer: "Heat" },
  { id: 7, answer: "Carry" },
  { id: 8, answer: "Speak" },
  { id: 9, answer: "Write" },
  { id: 10, answer: "Mother" },
  { id: 11, answer: "Father" },
  { id: 12, answer: "Good" },
  { id: 13, answer: "Bad" },
  { id: 14, answer: "Study" },
  { id: 15, answer: "Believe" },
  { id: 16, answer: "Hand" },
  { id: 17, answer: "See" },
  { id: 18, answer: "Sound" },
  { id: 19, answer: "Water" },
  { id: 20, answer: "Self" },
  { id: 21, answer: "Death" },
  { id: 22, answer: "Write" },
  { id: 23, answer: "Love" },
  { id: 24, answer: "Many" },
  { id: 25, answer: "Light" },
  { id: 26, answer: "Kill" },
  { id: 27, answer: "All" },
  { id: 28, answer: "Against" },
  { id: 29, answer: "God" },
  { id: 30, answer: "Time" }
];

      const [selectedAnswers, setSelectedAnswers] = React.useState({});
      const [showResults, setShowResults] = React.useState(false);
      const [score, setScore] = React.useState(0);

      const handleOptionSelect = (questionId, selectedOption) => {
        setSelectedAnswers(prev => ({
          ...prev,
          [questionId]: selectedOption
        }));
      };

      const checkAnswers = () => {
        let correctCount = 0;
        answers.forEach(answer => {
          if (selectedAnswers[answer.id] === answer.answer) {
            correctCount++;
          }
        });
        setScore(correctCount);
        setShowResults(true);
      };

      return (
        <div className="max-w-4xl mx-auto p-1 sm:p-4 md:p-6">
          {showResults && (
            <div className="sticky top-0 z-50 w-full bg-white shadow-md mb-2 sm:mb-4">
              <div className="max-w-4xl mx-auto p-2 sm:p-3 md:p-4 flex justify-between items-center">
                <div className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold">
                  Your score: <span className="text-blue-600">{score}</span> out of {questions.length}
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                    ({((score/questions.length) * 100).toFixed(1)}%)
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-2 sm:gap-4 md:gap-6">
            {questions.map((q) => (
              <div key={q.id} className="bg-white rounded-md sm:rounded-lg shadow-sm sm:shadow-md p-2 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
                <p className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-800">
                  <span className="text-blue-600 mr-1 sm:mr-2">{q.id}.</span>
                  {q.question}
                </p>
                <div className="grid gap-1 sm:gap-2 md:gap-3">
                  {q.options.map((option) => (
                    <div 
                      key={option} 
                      className={`flex items-center p-1.5 sm:p-2 md:p-3 rounded border cursor-pointer hover:bg-blue-50 transition-colors
                        ${selectedAnswers[q.id] === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                    >
                      <input
                        type="radio"
                        id={`${q.id}-${option}`}
                        name={`question-${q.id}`}
                        value={option}
                        checked={selectedAnswers[q.id] === option}
                        onChange={() => handleOptionSelect(q.id, option)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600"
                      />
                      <label 
                        htmlFor={`${q.id}-${option}`}
                        className="ml-2 sm:ml-3 text-xs sm:text-sm md:text-base cursor-pointer flex-grow"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {showResults && (
                  <div className="mt-2 sm:mt-3 md:mt-4 p-1.5 sm:p-2 md:p-3 rounded">
                    {selectedAnswers[q.id] === answers.find(a => a.id === q.id).answer ? (
                      <div className="flex items-center text-green-600 text-xs sm:text-sm md:text-base">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Correct!</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-600 text-xs sm:text-sm md:text-base">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-medium">
                          Incorrect. Correct answer: {answers.find(a => a.id === q.id).answer}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="sticky bottom-0 bg-white p-2 sm:p-3 md:p-4 border-t mt-2 sm:mt-4 md:mt-6 flex flex-col sm:flex-row justify-center items-center">
            <button 
              onClick={checkAnswers} 
              className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded 
                text-xs sm:text-sm md:text-base font-medium hover:bg-blue-700 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Check Answers
            </button>
          </div>
        </div>
      );
}

export default main;
