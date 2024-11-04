import React from 'react';
import './About.css';

function About() {
  const getRandomFact = () => {
    const facts = [
      "React is a JavaScript library for building user interfaces.",
      "React was created by Jordan Walke, a software engineer at Facebook.",
      "React components can be class-based or functional.",
      "Simran",
      "Pargol",
    ];
    return facts[Math.floor(Math.random() * facts.length)];
  };

  return (
    <div className="about-container">
      <h1>About This App</h1>
      <p>This app includes a number guessing game, a contact form, and a task list.</p>
      <button onClick={() => alert(getRandomFact())}>Fun Fact</button>
    </div>
  );
}

export default About;
