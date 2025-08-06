import React from "react";

// Add the props type here
type QuizCardProps = {
  questionData: { question: string; options: string[]; answer: string };
  onAnswer: (isCorrect: boolean) => void;
  currentIndex: number;
};

// Update QuizCard to accept props
const QuizCard: React.FC<QuizCardProps> = ({ questionData, onAnswer, currentIndex }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Q{currentIndex}: {questionData.question}
      </h2>
      <div className="space-y-2">
        {questionData.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option === questionData.answer)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;


