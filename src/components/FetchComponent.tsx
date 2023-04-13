import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import { News } from "../interfaces/News";
import SingleNews from "./SingleNews";

const FetchComponent = () => {
  const [news, setNews] = useState<News[]>([]);

  const fetchNews = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // data è l'array di Articoli
        setNews(data);
      } else {
        alert("response NOT ok");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="mt-5 my-4">
      <h2>ARTICOLI DISPONIBILI</h2>
      <ListGroup className="d-flex justify-content-center flex-row flex-wrap">
        {news.map((gino) => (
          <SingleNews new={gino} key={gino.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default FetchComponent;
