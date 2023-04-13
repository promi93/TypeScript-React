import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { News } from "../interfaces/News";

import "bootstrap/dist/css/bootstrap.min.css";

interface SingleNewsProps {
  new: News;
}

const SingleNews = (props: SingleNewsProps) => {
  return (
    <Card style={{ width: "18rem" }} className="mx-2 my-2">
      <Card.Img variant="top" src={props.new.imageUrl} />
      {/* <Card>{props.new.publishedAt}</Card> */}
      <Card.Body>
        <Card.Title>{props.new.title}</Card.Title>
        <Card.Text>{props.new.summary}</Card.Text>

        <Button variant="primary">View Article</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleNews;
