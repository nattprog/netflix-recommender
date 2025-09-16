// const fs = require("fs");
import fs from "fs";

let genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

// Example JavaScript object
import movies from "./source.mjs";

let newMovies = {};
newMovies.results = movies.results.map((movie) => {
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

// Convert JS object to JSON string
const jsonData = JSON.stringify(newMovies, null, 2); // `null, 2` formats it nicely

// Write JSON to a file
fs.writeFile("movies.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
  } else {
    console.log("JSON file has been saved as movies.json");
  }
});
