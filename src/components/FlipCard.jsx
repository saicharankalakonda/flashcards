import React, { useState } from "react";
import "./FlipCard.css"; // We'll create this CSS file for styling

const FlipCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Content for the front of the card */}
          <h3>{props.question}</h3>
        </div>
        <div className="flip-card-back">
          {/* Content for the back of the card */}
          <h3>{props.answer}</h3>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
