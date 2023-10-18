import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const portfolio = projects.map((project) => {
    let content = ProjectItem(project);
    return <div key={project.id}>{content}</div>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}{portfolio}
      </div>
    </div>
  );
}

export default ProjectList;
