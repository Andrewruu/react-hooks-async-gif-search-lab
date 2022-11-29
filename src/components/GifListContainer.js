import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dogs");

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=qzAGgs2GZYASJ9VAT5hwOqHWvKLl0liw&rating=g&limit=3`)
      .then(res => res.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch onSubmitQuery={setQuery} />
    </div>
  );
}

export default GifListContainer;