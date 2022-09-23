import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <h1>{name}</h1>
        <h3>{about}</h3>
        {technologies.map((elem,index) =>
        <div key={elem}><span>{elem}</span></div>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
