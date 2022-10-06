import React, { useEffect, useState } from "react";

import "./style.css";
import Search from "./Search";
import Card from "./Card";
let api_key = "&api_key=f4ccf89c2ee6e3bece6132fb34133822";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + api_key;
let array = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];
const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieUrl, setMovieUrl] = useState(url);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(movieUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [movieUrl]);
  function getData(movieType) {
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + api_key;
    }
    if (movieType === "Theatre") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        api_key;
    }
    if (movieType === "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        api_key;
    }
    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" +
        api_key;
    }
    if (movieType === "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        api_key;
    }
    setMovieUrl(url);
  }
  function searchMovie(evt) {
    if (evt.key === "Enter") {
      console.log(evt);
      url =
        base_url +
        "/search/movie?api_key=f4ccf89c2ee6e3bece6132fb34133822&query=" +
        search;
      setMovieData(url);
      setSearch(" ");
    }
  }

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {array.map((value) => {
              return (
                <li>
                  <a
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}>
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Search searchMovie={searchMovie} />
      </div>

      <div className="container">
        {movieData.length === 0 ? (
          <p className="not found">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};

export default Main;
