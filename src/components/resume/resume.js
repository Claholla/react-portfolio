import React from 'react';
import resumeDoc from '../images/Clay Holland Resume 2021.pdf';

const resume = () => {
    return (
      <>
      <br /><br />
      <div className="columns">
      <div className="column is-one-third"></div>
      <div className="column">
      <h2>Download my resume with the link below:</h2>
      <br />
      <a href ={resumeDoc}>
        <button className="button is-large is-fullwidth">Download</button>
      </a>
      </div>
      <div className="column is-one-third"></div>
      </div>
      <br />
      </>
    )
};

export default resume;