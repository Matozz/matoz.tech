import Container from "../components/Container";
import MusicCard from "../components/MusicCard";
import React from "react";

const MusicLayout = ({ musics = [] }) => {
  return (
    <Container>
      <div className="relative flex flex-wrap -mx-4">
        {musics
          .sort((a, b) => parseInt(a.order) - parseInt(b.order))
          .map((music) => (
            <MusicCard key={music.id} {...music} />
          ))}
      </div>
    </Container>
  );
};

MusicLayout.propTypes = {};

export default MusicLayout;
