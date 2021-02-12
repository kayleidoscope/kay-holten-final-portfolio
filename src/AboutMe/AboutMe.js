import React from 'react';
import headshot from '../images/headshot.jpg'
import './AboutMe.css'
import FunFacts from '../FunFacts/FunFacts'

function AboutMe() {
  return (
    <section id='about-me'>
      <h2>About Me</h2>
      <div className="top">
        <img src={headshot} className="item"/>
        <p className="item">Hi! I'm Kay: former newspaper copy editor, current software developer!</p>
      </div>
      <p>One day, while reading through a reporter's article and finding an errant comma, I realized how little of a difference that comma made. From there, I set off to find a career where comma placement was make or break.</p>
      <p>Now I've learned the joy of software engineering is so much more than commas: it's problem-solving to fix huge errors and collaborating to create innovative projects and designing to make everything stunning, and I couldn't be happier with where my career has taken me.</p>
      <div className="breakout">
        <h3>Tech knowledge</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>jQuery</li>
          <li>RESTful APIs</li>
          <li>Node.js</li>
          <li>Accessible design</li>
          <li>SQL / PostgreSQL</li>
        </ul>
      </div>
      <FunFacts />
    </section>
  );
}

export default AboutMe;
