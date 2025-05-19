import { useEffect, useState } from 'react'
import './App.css'
import Flashcard from './FlashCard';


function App() {

  const [questionData, setQuestionData] = useState([])

  const fetchQuestion = async () => {
    const quesData = await fetch('https://the-trivia-api.com/v2/questions/');
    const quesDataJson = await quesData.json();
    setQuestionData(quesDataJson);
    console.log(quesDataJson);
  }

  useEffect(() => {
    // Force light background and text color
    document.body.style.backgroundColor = '#edf2f7';
    document.body.style.colorScheme = 'light';
    document.body.style.color = '#2d3748'; // Dark text for light background
    fetchQuestion();
  }, []);

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
        <h1>📚 REACT Flashcards</h1>
        <p>Hover on a card to reveal the answer</p>
      </div>
      <div style={{
        display: 'flex',
        // flexDirection: 'column', // One card per line
        alignItems: 'center',    // Center horizontally
        justifyContent: 'center',
        // gap: '1rem',             // Space between cards
        // padding: '1rem',
        flexWrap: "wrap",
        width: '100%'
      }}>
        {

          questionData.map((question, idx) =>
            <Flashcard key={idx} frontContent={question.question.text} backContent={question.correctAnswer} />
          )}

      </div>
      <footer className="app-footer">
        Made with ❤️ using React | @Muhammad Azam
      </footer>
    </>
  )
}

export default App
