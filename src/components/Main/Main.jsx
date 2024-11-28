import "./Main.css";
import { useState } from "react";
import headshot from "../../assets/headshot.jpg";

function Main() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("skills");

  // Function to handle tab switching
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="main">
      {/* Headshot image */}
      <img src={headshot} alt="Telasja Reynolds" className="main__headshot" />

      <div className="main__info">
        {/* Title and Bio */}
        <h2 className="main__title">
          Hello! My name is Telasja Reynolds. I'm a Full-Stack Software Engineer
          with a knack for solving puzzles and a passion for crafting
          user-friendly applications.
        </h2>
        <p className="main__bio">
          With expertise in tools like React, Node.js, and MongoDB, I thrive on
          building responsive, scalable solutions that merge functionality with
          flair. My journey from film production and recruiting to engineering
          was sparked by a love for problem-solving and a fascination with how
          technology shapes our world. As the author of Golden Habit Stacks,
          I’ve explored how small, intentional changes can lead to big
          wins—whether it’s optimizing daily routines or engineering seamless
          user experiences. My unique blend of storytelling, people skills, and
          technical expertise allows me to collaborate effectively and bring
          creative, impactful ideas to life. When I’m not debugging code or
          brainstorming the next big idea, you’ll find me participating in code
          jams, refining my portfolio with cutting-edge tools like Webpack and
          Vite, or plotting ways to make tech more inclusive and fun.
        </p>

        {/* Tab navigation */}
        <div className="main__skills-title">
          <p
            className={`main__skills-tab ${
              activeTab === "skills" ? "active-link" : ""
            }`}
            onClick={() => openTab("skills")}
          >
            Skills
          </p>
          <p
            className={`main__skills-tab ${
              activeTab === "education" ? "active-link" : ""
            }`}
            onClick={() => openTab("education")}
          >
            Education
          </p>
        </div>

        {/* Tab contents */}
        <div
          className={`main__tab-contents ${
            activeTab === "skills" ? "active-tab" : ""
          }`}
          id="skills"
        >
          <ul className="main__tab-list">
            <li>
              <strong>API Integration & Backend Development</strong> – Designing
              robust RESTful APIs and efficient server-side solutions using
              Node.js and Express.
            </li>
            <li>
              <strong>Responsive Front-End Design</strong> – Creating dynamic,
              user-friendly interfaces with React and modern CSS frameworks.
            </li>
            <li>
              <strong>Collaboration & Project Leadership</strong> – Bridging
              technical and non-technical teams, ensuring successful project
              delivery.
            </li>
          </ul>
        </div>
        <div
          className={`main__tab-contents ${
            activeTab === "education" ? "active-tab" : ""
          }`}
          id="education"
        >
          <ul className="main__tab-list">
            <li>
              <strong>TripleTen</strong>
              <br />
              Full-Stack Software Engineering Certificate
            </li>
            <li>
              <strong>Bowling Green State University </strong>
              <br />
              Bachelor's in Arts and Scrience
            </li>
            <li>
              <strong>GeneationUSA Coding Bootcamp</strong>
              <br />
              Certified JavaScript Developer
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Main;
