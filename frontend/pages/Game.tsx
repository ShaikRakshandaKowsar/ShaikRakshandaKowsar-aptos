import React, { useState, useEffect } from "react";
import quizData from "../data/quizData";
import QuizCard from "../components/Quizcard";
import { motion, AnimatePresence } from "framer-motion";

const Game: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      new Audio("/success.mp3").play();
    } else {
      new Audio("/fail.mp3").play();
    }

    if (index + 1 >= quizData.length) {
      setCompleted(true); // Triggers useEffect below
      setTimeout(() => setShowPopup(true), 500);
    } else {
      setIndex(index + 1);
      setLevel(Math.floor((index + 2) / 2));
    }
  };


  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 relative">
      <div className="w-full max-w-lg">
        <AnimatePresence mode="wait">
          {!completed ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-4 text-center text-white">
                <p className="text-md">Level: {level} / 15</p>
                <p className="text-sm text-gray-300">Score: {score}</p>
              </div>
              <QuizCard
                questionData={quizData[index]}
                onAnswer={handleAnswer}
                currentIndex={index + 1}
              />
            </motion.div>
          ) : (
            <motion.div
              className="text-center text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl font-bold mb-4">🎉 Quiz Completed!</h2>
              <p>Your Score: {score} / {quizData.length}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🎉 Completion Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-xl max-w-sm w-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-2xl font-bold mb-2">🎊 Congratulations!</h2>
              <p className="mb-4">You completed all levels!</p>
              <p className="font-semibold text-blue-500">
                Your Score: {score} / {quizData.length}
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Game;
