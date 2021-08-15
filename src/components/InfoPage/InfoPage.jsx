import React from 'react';
import './InfoPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h4>
      Technologies Used:
      </h4>
      <h4>
      Passport, React, Redux, Node, Express, Postgres, postico, material.ui, sweetalert2, animate.css.
      </h4>
    </div>
  );
}

export default InfoPage;
