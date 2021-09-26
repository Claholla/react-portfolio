import React from 'react';
import ProjectCard from '../projectcard/projectcard';
import projectdata from './projectdata.json';

function projects() {
    return (
        <article id="work" className="article-1 columns is-multiline-tablet">
            <h3 className="column is-2 is-offset-1 is-size-1 is-offset-1-mobile">
                Work
            </h3>
            <section className="column is-8 is-10-mobile is-offset-1-mobile">
            <div>
             
            <generateCard>
                {projectdata.map((project) =>
                <ProjectCard key = {project.id}
                             title = {project.title}
                             image = {project.image}
                             application = {project.application}
                             github = {project.github} 
                             technologies = {project.technologies} />
                )}
            </generateCard>

            </div> 
            <div className="column is-1"></div>
            </section>
        </article>
    )
};

function generateCard(props) {
    return <div class="spacer">{props.children}</div>
}

export default projects;