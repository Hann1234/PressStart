import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>
      Technologies Used:
      Passport, React, Redux, Node, Express, Postgres, postico, material.ui, sweetalert2, animate.css.
      </p>
    </div>
  );
}

export default InfoPage;
