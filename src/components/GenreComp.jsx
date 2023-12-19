import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function Genre({ onSelectGenre }) {
  const genres = ["fantasy", "history", "horror", "romance", "scifi"];
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onSelectGenre(genre);
  };

  return (
    <ButtonGroup>
      {genres.map((genre) => (
        <Button
          key={genre}
          variant={selectedGenre === genre ? "primary" : "secondary"}
          onClick={() => handleGenreClick(genre)}
        >
          {genre}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default Genre;
