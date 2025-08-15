import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    if (timeRemaining <= 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }

    return () => clearTimeout(timerId);
  }, [timeRemaining, onAnswered]);

  return (
    <div className="question">
      <h2>{question.text}</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
