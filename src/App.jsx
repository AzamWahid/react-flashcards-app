import { useState } from 'react'
import './App.css'
import Flashcard from './FlashCard';


function App() {

  const cards = [
    {
      id: 1,
      front: "What is the capital of Alaska?",
      back: "Juneau",

    },
    {
      id: 2,
      front: "What is the capital of California?",
      back: "Sacramento",
    },
    {
      id: 3,
      front: "What is the capital of New York?",
      back: "Albany",
    },
    {
      id: 4,
      front: "What is the capital of Florida?",
      back: "Tallahassee",
    },
    {
      id: 5,
      front: "What is the capital of Texas?",
      back: "Austin",
    },
    {
      id: 6,
      front: "What is the capital of New Mexico?",
      back: "Santa Fe",
    },
    {
      id: 7,
      front: "What is the capital of Arizona?",
      back: "Phoenix",
    },
  ];

  return (
    <>
      <div className="app-header">
        <h1>📚 State Capitals Flashcards</h1>
        <p>Hover on a card to reveal the answer</p>
      </div>
      <div style={{
        display: 'flex',
        // flexDirection: 'column', // One card per line
        alignItems: 'center',    // Center horizontally
        // gap: '1rem',             // Space between cards
        // padding: '1rem',
        flexWrap: "wrap",
        width: '100%'
      }}>
        {

          cards.map((card, idx) =>
            <Flashcard key={idx} frontContent={card.front} backContent={card.back} />
          )}

      </div>
      <footer className="app-footer">
        Made with ❤️ using React | @YourName
      </footer>
    </>
  )
}

export default App
