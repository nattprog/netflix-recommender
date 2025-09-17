// const fs = require("fs");
import fs from "fs";

import movies from "./sourceJSON_themoviedb.mjs";

import genres from "./genres.mjs";

let s = new Set(movies.results);

let moviesSet = [...s];

let newMovies = {};
newMovies = moviesSet.map((movie) => {
  let genreArray = [];
  movie.genre_ids.forEach((Numid) => {
    return genres.forEach((gen) => {
      if (Numid === gen.id) {
        genreArray.push(gen.name);
      }
    });
  });
  movie.genre = genreArray;
  return movie;
});

// remove dupes due to new votes
const uniqueArray = newMovies.filter((value, index) => {
  const _value = value.id;
  return (
    index ===
    newMovies.findIndex((obj) => {
      return obj.id === _value;
    })
  );
});

// convert to json
const jsonData = JSON.stringify(uniqueArray, null, 2);

fs.writeFile("cleanedMoviesData.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing json:", err);
  } else {
    console.log("Success writing json");
  }
});
