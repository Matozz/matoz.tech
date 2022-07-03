import BLOG from "@/blog.config";
import ProjectLayout from "@/layouts/project";
import { getAllData } from "@/lib/notion";

export default function project({ projects }) {
  return <ProjectLayout projects={projects} />;
}

export async function getStaticProps() {
  const projects = await getAllData(BLOG.notionProjectPageId);
  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
}
