import React from 'react';
import './Flashcard.css';

const Flashcard = ({ frontContent, backContent }) => {
  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="front">
          {frontContent}
        </div>
        <div className="back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
