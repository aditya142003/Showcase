import React, { useEffect, useState } from "react";
import "./Style/ShowArea.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/logo.jpg";
import { useNavigate } from "react-router-dom";

function ShowArea(props) {
  const [shows, setShows] = useState([]);
  const [images, setImages] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    var arr = [];
    axios
      .get(
        `https://api.tvmaze.com/search/shows?q=${
          props.search ? props.search : "all"
        }`
      )
      .then(function (response) {
        console.log(response.data);
        setShows(response.data);
        response.data.map((element) => {
          if (element.show.image) {
            arr.push(element.show.image.original);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    setImages(arr);
  }, [props.search]);

  function handleClick(ele) {
    nav("/details");
    // console.log(ele.show)
    localStorage.setItem("showSel", JSON.stringify(ele.show));
  }

  return (
    <div>
      {/* <div className="slider"></div> */}
      <div className="showMainCont">
        {shows.map((ele) => {
          return (
            <div className="showIndividual">
              <div>
                <img
                  src={ele.show.image ? ele.show.image.original : logo}
                  class="showImage"
                  alt="..."
                />
              </div>
              <div>
                <h3 className="title">{ele.show.name}</h3>
                <div className="summary">
                  {ele.show.summary.slice(0, 150) + "..."}
                </div>
                <div className="other">
                  <b>Genres: </b>
                  {ele.show.genres.map((e) => {
                    return (
                      <span>
                        <i>{e}</i>
                        <b> </b>
                      </span>
                    );
                  })}
                </div>
                <div className="other">
                  <b>Days: </b>
                  {ele.show.schedule.days.length != 0 ? (
                    ele.show.schedule.days.map((e) => {
                      return (
                        <span>
                          <i>{e}</i>
                        </span>
                      );
                    })
                  ) : (
                    <span>Unavailable</span>
                  )}
                </div>
                <div className="other">
                  <b>Time: </b>
                  <i>
                    {ele.show.schedule.time !== ""
                      ? ele.show.schedule.time
                      : "Unavailable"}
                  </i>
                </div>
                <div className="other">
                  <button
                    onClick={(event) => handleClick(ele, event)}
                    className="knowMore"
                  >
                    Know more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowArea;
