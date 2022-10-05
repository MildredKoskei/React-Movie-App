import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <div className="movie">
        <img src="Images/poster.jpg" className="poster"></img>
        <div className="movie-details">
          <div className="box">
            <h4 className="title">Movie Title:</h4>
            <p className="rating"> 9.7</p>
            <div className="overview">
              <h2>overview</h2>
              Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
