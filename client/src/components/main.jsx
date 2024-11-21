import React, { useState } from 'react';

function main() {
    const questions = [
        {
          id: 1,
          question: "What does 'Synchronize' mean?",
          options: [
            "To slow down",
            "To adjust to a common time",
            "To create disorder",
            "To segregate",
          ],
        },
        {
          id: 2,
          question: "'Anachronism' refers to something that is:",
          options: [
            "Out of its proper time",
            "Chronologically accurate",
            "Always updated",
            "Well-organized",
          ],
        },
        {
          id: 3,
          question: "Choose a synonym for 'Benign':",
          options: ["Harmful", "Gentle", "Hostile", "Malevolent"],
        },
        {
          id: 4,
          question: "What is the meaning of 'Equanimity'?",
          options: [
            "Extreme anger",
            "Calmness and composure",
            "Joyful excitement",
            "Nervous energy",
          ],
        },
        {
          id: 5,
          question: "The CEO tried to ___ his employees to complete the project on time.",
          options: ["Impede", "Expedite", "Aggregate", "Segregate"],
        },
        {
          id: 6,
          question: "What is the antonym of 'Magnanimity'?",
          options: ["Generosity", "Greed", "Kindness", "Selflessness"],
        },
        {
          id: 7,
          question: "The historian discovered an ___ in the old manuscript.",
          options: ["Synchronize", "Anachronism", "Chronicle", "Animus"],
        },
        {
          id: 8,
          question: "Which word is synonymous with 'Expedite'?",
          options: ["Accelerate", "Delay", "Block", "Hinder"],
        },
        {
          id: 9,
          question: "Choose the correct antonym for 'Doleful':",
          options: ["Cheerful", "Sorrowful", "Grieving", "Depressing"],
        },
        {
          id: 10,
          question: "What does 'Bona fide' mean?",
          options: ["Fake", "Genuine", "Dangerous", "Unrealistic"],
        },
        {
          id: 11,
          question: "The ___ of the team into smaller groups made the task easier.",
          options: ["Segregation", "Animation", "Aggregation", "Condolence"],
        },
        {
          id: 12,
          question: "Select the synonym for 'Credible':",
          options: ["Unbelievable", "Plausible", "False", "Suspicious"],
        },
        {
          id: 13,
          question: "Which word describes a person who loves to socialize?",
          options: ["Gregarious", "Indolent", "Diffident", "Credulous"],
        },
        {
          id: 14,
          question: "'Bon mot' refers to:",
          options: [
            "A sharp remark",
            "A genuine act",
            "A kind gesture",
            "A cruel joke",
          ],
        },
        {
          id: 15,
          question: "What does 'Fiduciary' relate to?",
          options: [
            "Financial trust",
            "Religious beliefs",
            "Physical effort",
            "Medical treatment",
          ],
        },
        {
          id: 16,
          question: "The opposite of 'Inanimate' is:",
          options: ["Dead", "Alive", "Stiff", "Artificial"],
        },
        {
          id: 17,
          question: "The philanthropist’s ___ actions helped many families.",
          options: ["Malevolent", "Benevolent", "Gregarious", "Anachronistic"],
        },
        {
          id: 18,
          question: "What is the synonym of 'Condole'?",
          options: ["Mourn", "Celebrate", "Disregard", "Ignore"],
        },
        {
          id: 19,
          question: "Despite the challenges, she maintained her ___ and stayed calm.",
          options: ["Equanimity", "Animosity", "Expediency", "Indolence"],
        },
        {
          id: 20,
          question: "'Credulous' means:",
          options: [
            "Too ready to believe things",
            "Highly skeptical",
            "Doubtful",
            "Untrustworthy",
          ],
        },
        {
          id: 21,
          question: "The term 'Bonhomie' refers to:",
          options: [
            "Cheerful friendliness",
            "Hostile intentions",
            "Indifference",
            "Sadness",
          ],
        },
        {
          id: 22,
          question: "What is the antonym of 'Benign'?",
          options: ["Gentle", "Harmful", "Generous", "Kind"],
        },
        {
          id: 23,
          question: "The antonym of 'Gregarious' is:",
          options: ["Sociable", "Reserved", "Outgoing", "Friendly"],
        },
        {
          id: 24,
          question: "What is the meaning of 'Expedition'?",
          options: [
            "A long journey for a specific purpose",
            "A delay in action",
            "A collection of resources",
            "A financial trust",
          ],
        },
        {
          id: 25,
          question: "The word 'Manacle' is most closely related to:",
          options: ["Freedom", "Restraints", "Opportunity", "Responsibility"],
        },
        {
          id: 26,
          question: "What does 'Podiatrist' specialize in?",
          options: ["Brain surgery", "Foot care", "Cardiology", "Mental health"],
        },
        {
          id: 27,
          question: "What is the synonym of 'Expeditious'?",
          options: ["Efficient", "Slow", "Hindered", "Complicated"],
        },
        {
          id: 28,
          question: "The word 'Credence' relates to:",
          options: [
            "Belief in something as true",
            "Doubtfulness",
            "Physical appearance",
            "Lack of knowledge",
          ],
        },
        {
          id: 29,
          question: "What does 'Confidential' mean?",
          options: [
            "Meant to be kept private",
            "Open to everyone",
            "Easily accessible",
            "Untrustworthy",
          ],
        },
        {
          id: 30,
          question: "Which of these words relates to sorrow?",
          options: ["Dolorous", "Bona fide", "Gregarious", "Fiduciary"],
        },
        {
          id: 31,
          question: "The antonym of 'Incredible' is:",
          options: ["Unbelievable", "Ordinary", "Plausible", "Amazing"],
        },
        {
          id: 32,
          question: "What does 'Aggregate' mean?",
          options: [
            "To separate into parts",
            "A total collection",
            "An individual entity",
            "To remove entirely",
          ],
        },
        {
          id: 33,
          question: "Select the correct definition for 'Perfidy':",
          options: [
            "Faithfulness",
            "Betrayal of trust",
            "Financial trust",
            "Loyalty",
          ],
        },
        {
          id: 34,
          question: "'Diffident' means:",
          options: ["Lacking self-confidence", "Overly confident", "Cheerful", "Bold"],
        },
        {
          id: 35,
          question: "The opposite of 'Confidence' is:",
          options: ["Trust", "Diffidence", "Belief", "Credibility"],
        },
        {
          id: 36,
          question: "The antonym of 'Benefactor' is:",
          options: ["Recipient", "Oppressor", "Donor", "Kind person"],
        },
        {
          id: 37,
          question: "The root 'Chron' in 'Chronological' refers to:",
          options: ["Time", "Place", "Number", "History"],
        },
        {
          id: 38,
          question: "What does 'Exonerate' mean?",
          options: [
            "To remove blame",
            "To accuse",
            "To congratulate",
            "To delay",
          ],
        },
        {
          id: 39,
          question: "The word 'Onerous' suggests something is:",
          options: ["Easy", "Burdensome", "Helpful", "Generous"],
        },
        {
          id: 40,
          question: "The opposite of 'Segregate' is:",
          options: ["Combine", "Separate", "Move away", "Aggregate"],
        },
    
      ];
      const answers = [
        { id: 1, answer: "To adjust to a common time" },
        { id: 2, answer: "Out of its proper time" },
        { id: 3, answer: "Gentle" },
        { id: 4, answer: "Calmness and composure" },
        { id: 5, answer: "Expedite" },
        { id: 6, answer: "Greed" },
        { id: 7, answer: "Anachronism" },
        { id: 8, answer: "Accelerate" },
        { id: 9, answer: "Cheerful" },
        { id: 10, answer: "Genuine" },
        { id: 11, answer: "Segregation" },
        { id: 12, answer: "Plausible" },
        { id: 13, answer: "Gregarious" },
        { id: 14, answer: "A sharp remark" },
        { id: 15, answer: "Financial trust" },
        { id: 16, answer: "Alive" },
        { id: 17, answer: "Benevolent" },
        { id: 18, answer: "Mourn" },
        { id: 19, answer: "Equanimity" },
        { id: 20, answer: "Too ready to believe things" },
        { id: 21, answer: "Cheerful friendliness" },
        { id: 22, answer: "Harmful" },
        { id: 23, answer: "Reserved" },
        { id: 24, answer: "A long journey for a specific purpose" },
        { id: 25, answer: "Restraints" },
        { id: 26, answer: "Foot care" },
        { id: 27, answer: "Efficient" },
        { id: 28, answer: "Belief in something as true" },
        { id: 29, answer: "Meant to be kept private" },
        { id: 30, answer: "Dolorous" },
        { id: 31, answer: "Ordinary" },
        { id: 32, answer: "A total collection" },
        { id: 33, answer: "Betrayal of trust" },
        { id: 34, answer: "Lacking self-confidence" },
        { id: 35, answer: "Diffidence" },
        { id: 36, answer: "Oppressor" },
        { id: 37, answer: "Time" },
        { id: 38, answer: "To remove blame" },
        { id: 39, answer: "Burdensome" },
        { id: 40, answer: "Combine" },
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
