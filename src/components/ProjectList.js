import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((item) =>
        <ProjectItem name={item.name} about={item.about} key={item.id} technologies={item.technologies}/>
        )}
      </div>
      <div id="project-list">{/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
