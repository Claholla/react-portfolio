import React from 'react';

function projectCard(props) {
    return (
        <div className="card">
        <div className="card-image">
          <figure className="image is-16by9">
              <a href={props.application}>
            <img src={props.image} alt={props.title}/>
            </a>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="content">
              <p className="subtitle is-10"><strong>{props.title}</strong>
                <br />
                {props.technologies}
                <br />
                <a href={props.github}>GitHub Repository</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default projectCard;