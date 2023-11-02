import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About Us</h1>
      <div>
        <p>Hey there!</p>

        <p>
          I'm <strong>Omar</strong>, a passionate individual with a knack for
          mixing things up—especially when it comes to cocktails. This project,
          "Cocktail DB," is a snapshot of my love for mixology and web
          development.
        </p>

        <h2>What to Expect</h2>

        <ul>
          <li>
            <strong>Recipes Galore:</strong> Explore a variety of cocktail
            recipes, from classics to my own concoctions.
          </li>
          <li>
            <strong>Simple and Clean:</strong> I believe in keeping things
            simple. Enjoy an easy-to-navigate platform to quench your thirst for
            cocktail inspiration.
          </li>
        </ul>

        <h2>Get in Touch</h2>

        <p>
          Want to chat about cocktails, code, or just say hello? Shoot me an
          email at{" "}
          <a href="mailto:omarbettaieb3@gmail.com">
            <strong>omarbettaieb3@gmail.com</strong></a>.
        </p>
      </div>
    </section>
  );
};

export default About;
