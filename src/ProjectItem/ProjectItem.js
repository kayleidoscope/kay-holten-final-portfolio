import React from 'react';
import './ProjectItem.css'

function ProjectItem(props) {
  const skillsLis = props.skillsTech.map((item) => {
    return <li key={item}>{item}</li>
  })

  return (
    <article className='project-item'>
      <h3>{props.title}</h3>
      <img src={props.image} alt={`Screenshot from ${props.title}`}/>
      <p>{props.description}</p>
      <h4>Skills Used</h4>
        <ul className="links skills">
          {skillsLis}
        </ul>
      <h4>Check It Out</h4>
      <ul className="links">
        <li>Visit <a href={props.liveSite}>live site</a></li>
        <li>Visit <a href={props.frontEnd}>front-end repo</a></li>
        {props.backEnd && <li>Visit <a href={props.backEnd}>back-end repo</a></li>}
      </ul>
    </article>
  );
}

export default ProjectItem;
