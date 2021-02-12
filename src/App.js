import React from 'react';
import Header from './Header/Header'
import AboutMe from './AboutMe/AboutMe'
import Contact from './Contact/Contact'
import ProjectSection from './ProjectSection/ProjectSection'
import FunFacts from './FunFacts/FunFacts'
import './App.css'

function App() {
  return (
    <main className='App'>
      <Header />
      <div className="big-screen">
        <AboutMe />
        <ProjectSection />
        <FunFacts />
        <Contact/>
      </div>
    </main>
  );
}

export default App;
