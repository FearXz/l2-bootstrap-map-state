import React, { useState } from "react";
import SubtitleComp from "./SubtitleComp";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "./CardComp";
import CategoryComp from "./CategoryComp";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const allCategoryObj = {
  fantasy: fantasy,
  history: history,
  horror: horror,
  romance: romance,
  scifi: scifi,
};

function MyMain() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleGenreButton = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <SubtitleComp />
      <div className="text-center m-5">
        <CategoryComp callbackFunction={handleGenreButton} />
      </div>
      <Container>
        <Row className="gy-3 mb-5">
          {allCategoryObj[selectedCategory] ? (
            allCategoryObj[selectedCategory].map((book, index) => (
              <Col xs={6} md={4} xl={3} xxl={2} key={`cardBook-${index}`}>
                <CardComp book={book} />
              </Col>
            ))
          ) : (
            <p className="text-center">Nessun libro disponibile per questo genere.</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default MyMain;
