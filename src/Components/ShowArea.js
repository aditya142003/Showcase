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
            <div>
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={ele.show.image ? ele.show.image.original : logo}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{ele.show.name}</h5>
                      <p class="card-text">
                        {ele.show.summary.slice(0, 150) + "..."}
                      </p>
                      <p class="card-text">
                        Genres:
                        <small class="text-body-secondary">
                          {ele.show.genres.map((e) => {
                            return <span>{e}</span>;
                          })}
                        </small>
                      </p>
                      <p class="card-text">
                        Language:
                        <small class="text-body-secondary">
                          {ele.show.language}
                        </small>
                      </p>
                      <p class="card-text">
                        Days:
                        <small class="text-body-secondary">
                          {ele.show.schedule.days.length != 0 ? (
                            ele.show.schedule.days.map((e) => {
                              return <span>{e}</span>;
                            })
                          ) : (
                            <span>Unavailable</span>
                          )}
                        </small>
                      </p>
                      <p class="card-text">
                        Time:
                        <small class="text-body-secondary">
                          {ele.show.schedule.time !== ""
                            ? ele.show.schedule.time
                            : "Unavailable"}
                        </small>
                      </p>
                      <button onClick={(event) => handleClick(ele, event)}>
                        Know more
                      </button>
                    </div>
                  </div>
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
