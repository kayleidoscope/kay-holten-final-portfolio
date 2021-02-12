import React from 'react';
import './ProjectItem.css'

function ProjectItem(props) {
  return (
    <article className='project-item'>
      <h3>{props.title}</h3>
      <img src={props.image} />
      <p>{props.description}</p>
      <ul className="links">
        <li>Visit <a href={props.liveSite}>live site</a></li>
        <li>Visit <a href={props.frontEnd}>front-end repo</a></li>
        {props.backEnd && <li>Visit <a href={props.backEnd}>back-end repo</a></li>}
      </ul>
    </article>
  );
}

export default ProjectItem;
