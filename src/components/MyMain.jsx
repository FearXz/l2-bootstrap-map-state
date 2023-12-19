import React from "react";
import SubtitleComp from "./SubtitleComp";
import fantasy from "../data/fantasy.json";
import { Col, Row } from "react-bootstrap";
import CardComp from "./CardComp";

function MyMain() {
  return (
    <>
      <SubtitleComp />
      <Row>
        {fantasy.map((fantasybook, index) => {
          console.log(fantasybook);
          return (
            <Col xs={6} md={3} lg={2} key={`cardBook-${index}`}>
              <CardComp book={fantasybook} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
export default MyMain;
