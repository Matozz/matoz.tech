import BLOG from "@/blog.config";
import MusicLayout from "@/layouts/music";
import { getAllData } from "@/lib/notion";

export default function project({ musics }) {
  return <MusicLayout musics={musics} />;
}

export async function getStaticProps() {
  const musics = await getAllData(BLOG.notionMusicPageId);
  return {
    props: {
      musics,
    },
    revalidate: 1,
  };
}
