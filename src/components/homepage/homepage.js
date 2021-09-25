import React from 'react';

const homepage = () => {
    return (
        <div className="bg-color">
            <section className="section">
            </section>

            <article className="article-1 columns is-multiline-tablet">
                <h3 className="column is-2 is-offset-1 is-size-1 is-offset-1-mobile">
                    About
                </h3>
                <img src={'../images/profilephoto-2021.png'} className="selfie column is-3 is-offset-1-mobile is-tablet" alt="That's me!" />
                <p className="column is-4 is-offset-1-mobile">
                    I am a Saint Paul based student Web Developer with multiple years of experience working in technical fields. I have a deep interest in learning and applying computer science topics. I have client and customer-facing experience, and I have several years of leadership experience spanning customer service jobs as well as jobs working in a creative capacity.
                    <br /><br />
                    My interests include video editing, coding for games, playing guitar, and baking.
                </p>
                <div className="column is-1"></div>
            </article>
            
        <section className="section">
        </section>
        </div>
    )
};

export default homepage;