import React, { useEffect, useState } from "react";
import "./style.css";
import Search from "./Search";
import Card from "./Card";
let api_key ="&api_key=f4ccf89c2ee6e3bece6132fb34133822";
let base_url = "https://api.themoviedb.org/3";
let url = base_url+ "/discover/movie?sort_by=popularity.desc"+ api_key;
const Main = () => {
    const [movieData, setMovieData] = useState([]);
    const [movieUrl, setMovieUrl] = useState(url);
    useEffect(() => {
        fetch(movieUrl)
        .then(resp => resp.json())
        .then(data =>{setMovieData(data.results);
        })

    }, [movieUrl])
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Theatre</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Comedy</a>
            </li>
           
          </ul>
        </nav>
        <Search />
      </div>

      <div className = "container">
        {
            (movieData.length==0)?<p className="not found">Not Found</p>: movieData.map((res, pos) => {
                return(
                    <Card info = {res} key ={pos} />
                )
            })
        }
        
      </div>
    </>
  );
};

export default Main;
