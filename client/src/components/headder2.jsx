import React, { useState, useEffect } from 'react';

function headder2() {
  
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem('quizTime');
    return savedTime ? parseInt(savedTime) : 1800;
  });
  
  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem('quizActive') === 'true';
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    let intervalId;
    
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime === 300) {
            setModalMessage('5 minutes remaining!');
            setShowModal(true);
          } else if (newTime === 120) {
            setModalMessage('2 minutes remaining!');
            setShowModal(true);
          } else if (newTime === 30) {
            setModalMessage('30 seconds remaining!');
            setShowModal(true);
          }
          localStorage.setItem('quizTime', newTime.toString());
          return newTime;
        });
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      localStorage.setItem('quizActive', 'false');
      setModalMessage('Time is up!');
      setShowModal(true);
      clearInterval(intervalId);
    }
    
    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleTimer = () => {
    if (!isActive) {
      setTime(1800);
      setIsActive(true);
      localStorage.setItem('quizTime', '1800');
      localStorage.setItem('quizActive', 'true');
    }
  };

  
  return (
    <>
      <div className='sticky top-0 z-50 mt-7 bg-slate-300 h-20 flex flex-col items-center justify-center shadow-md'>
        <button 
          onClick={handleTimer} 
          disabled={isActive}
          className={`px-4 py-2 rounded h-10 ${isActive ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          Start Quiz
        </button>
        {isActive && (
          <p className="text-sm sm:text-base">
            Time remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Time Alert!</h2>
            <p className="mb-4">{modalMessage}</p>
            <button 
              onClick={() => setShowModal(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default headder2