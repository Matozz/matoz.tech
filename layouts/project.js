import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import React from "react";

const ProjectLayout = ({ projects = [] }) => {
  return (
    <Container>
      <div className="relative flex flex-wrap -mx-4">
        {projects
          .sort((a, b) => parseInt(a.order) - parseInt(b.order))
          .map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>
    </Container>
  );
};

ProjectLayout.propTypes = {};

export default ProjectLayout;
