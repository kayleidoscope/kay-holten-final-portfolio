import React from 'react';
import ReactDOM from 'react-dom';
// import {MemoryRouter} from 'react-router-dom';
import FunFacts from './FunFacts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    // <MemoryRouter>
      <FunFacts />,
    // </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});
