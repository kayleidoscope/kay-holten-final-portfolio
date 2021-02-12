import React from 'react';
import ReactDOM from 'react-dom';
// import {MemoryRouter} from 'react-router-dom';
import ProjectSection from './ProjectSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    // <MemoryRouter>
      <ProjectSection />,
    // </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});
