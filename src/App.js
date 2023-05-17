import "./styles.css";
import { releaseData } from "./data.ts";
import { useEffect, useState } from "react";
import ReleaseBox from "./components/ReleaseBox";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    releaseData().then((result) => {
      setData(result.releases);
    });
  }, []);

  return (
    <div className="App">
      <h1>Discogs Frontend Exercise</h1>
      <p>
        The goal of this exercise is to build an interface that displays a
        responsive grid of Releases fetched from an API that can be sorted by
        either Release title or Release year.
      </p>
      <div className="grid-container">
        {data.map((release) => (
          <ReleaseBox data={release} />
        ))}
      </div>
    </div>
  );
}
