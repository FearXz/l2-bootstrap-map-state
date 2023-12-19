import React from "react";
import Card from "react-bootstrap/Card";

function CardComp(props) {
  return (
    <Card key={props.book.asin}>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
