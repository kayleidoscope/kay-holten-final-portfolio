import React from 'react';
import ReactDOM from 'react-dom';
// import {MemoryRouter} from 'react-router-dom';
import ProjectItem from './ProjectItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const skillsTech = [
    "React",
    "Node.js",
    "Javascript",
    "APIs",
    "Postgres",
    "Knex",
    "Heroku",
    "Vercel",
    "HTML",
    "CSS"
]
  ReactDOM.render(
    // <MemoryRouter>
      <ProjectItem skillsTech={skillsTech}/>,
    // </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});
