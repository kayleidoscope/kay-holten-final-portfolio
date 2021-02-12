import React from 'react';
import Header from './Header/Header'
import AboutMe from './AboutMe/AboutMe'
import Contact from './Contact/Contact'
import ProjectSection from './ProjectSection/ProjectSection'
import ProjectItem from './ProjectItem/ProjectItem';

function App() {
  return (
    <main className='App'>
      <Header />
      <AboutMe />
      <ProjectSection />
      <Contact />
    </main>
  );
}

export default App;
