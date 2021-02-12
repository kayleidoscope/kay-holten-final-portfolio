import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import projectData from '../ProjectsData'
import quizPhoto from '../images/lesbian-history-quiz.png';
import notefulPhoto from '../images/noteful.png';
import sdcPhoto from '../images/social-distance-party.png';
import storyBitsPhoto from '../images/story-bits.png';
import ttPhoto from '../images/tabletop-tour.png';
import './ProjectSection.css'

function ProjectSection() {
  const projectLis = projectData.map(project => {
    let photo;
    if (project.title === "An American Lesbian History Quiz") {
      photo = quizPhoto
    } else if (project.title === "Noteful") {
      photo = notefulPhoto
    } else if (project.title === "Social Distance Party!") {
      photo = sdcPhoto
    } else if (project.title === "Story Bits") {
      photo = storyBitsPhoto
    } else if (project.title === "Tabletop Tour") {
      photo = ttPhoto
    }

    return (
      <ProjectItem
        key={project.id}
        title={project.title}
        image={photo}
        description={project.description}
        frontEnd={project.frontEnd}
        backEnd={project.backEnd}
        liveSite={project.liveSite}
        skillsTech={project.skillsTech}
      />
    )
  })

  return (
    <section id='projects'>
      <h2>Projects</h2>
      <ul className="cards">
        {projectLis}
      </ul>
    </section>
  );
}

export default ProjectSection;
