import "./Projects.css";
import { projects } from "../../utils/projectsData";

function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <div
          key={project.id}
          className="projects__card"
          onClick={() => window.open(project.link, "_blank")} 
        >
          <img
            src={project.image}
            alt={project.title}
            className="projects__card-image"
          />
          <div className="projects__card-content">
            <h2 className="projects__card-title">{project.title}</h2>
            <p className="projects__card-text">{project.description}</p>
          {project.repo ? (<a className="projects__repo-link" onClick={() => window.open(project.repo, "_blank")}>Click here for REPO!</a>) : <div></div>}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projects;
