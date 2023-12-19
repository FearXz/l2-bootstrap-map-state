import React, { useState } from "react";
import SubtitleComp from "./SubtitleComp";
import { Col, Row } from "react-bootstrap";
import CardComp from "./CardComp";
import Genre from "./GenreComp";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

function MyMain() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [books, setBooks] = useState([]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    // Carica i dati del genere selezionato
    switch (category) {
      case "fantasy":
        setBooks(fantasy);
        break;
      case "history":
        setBooks(history);
        break;
      case "horror":
        setBooks(horror);
        break;
      case "romance":
        setBooks(romance);
        break;
      case "scifi":
        setBooks(scifi);
        break;
      default:
        setBooks([]);
    }
  };

  return (
    <>
      <SubtitleComp />
      <div className=" text-center m-5">
        <Genre onSelectGenre={handleSelectCategory} />
      </div>
      <Row className="gy-3 mb-5">
        {books.map((book, index) => (
          <Col xs={6} md={3} lg={2} key={`cardBook-${index}`}>
            <CardComp book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MyMain;
