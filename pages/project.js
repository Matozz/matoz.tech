import ProjectLayout from "@/layouts/project";
import { getAllProjects } from "@/lib/notion";

export default function project({ projects }) {
  return <ProjectLayout projects={projects} />;
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}
