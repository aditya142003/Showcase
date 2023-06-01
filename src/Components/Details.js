import React from "react";
import "./Style/Detail.css";
import { useNavigate } from "react-router-dom";
import movieImage from "./Images/MovieImage.jpg";

function Details() {
  var showSel = localStorage.getItem("showSel");
  var showObj = JSON.parse(showSel);
  if (showObj.image == null) {
    var showObj = {
      ...showObj,
      image: {
        original:
          "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
    };
  }
  const nav = useNavigate();
  function downScroll() {
    document.getElementById("upperDiv").style.bottom = "100vh";
    document.getElementById("lowerDiv").style.bottom = "100vh";
  }
  function upscroll() {
    document.getElementById("upperDiv").style.bottom = "0vh";
    document.getElementById("lowerDiv").style.bottom = "0vh";
  }
  return (
    <div className="detailCont">
      <img src={showObj.image.original} className="bgimage"></img>
      <div>
        <div className="upperDiv" id="upperDiv">
          <h1 className="titleD">{showObj.name}</h1>
          <div className="summaryD">{showObj.summary}</div>
          <div
            style={{
              display: "flex",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "700px",
              margin: "auto",
            }}
          >
            <div className="otherD">
              <b>Genre: </b>
              <i>
                {showObj.genres.map((e) => {
                  return <span>{e}</span>;
                })}
              </i>
            </div>
            <div className="otherD">
              <b>Type: </b>
              <i>{showObj.type}</i>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "700px",
              margin: "auto",
            }}
          >
            <div className="otherD">
              <b>Premiered: </b>
              <i>{showObj.premiered}</i>
            </div>
            <div className="otherD">
              <b>Runtime: </b>
              <i>{showObj.runtime} min</i>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "700px",
              margin: "auto",
            }}
          >
            <div className="otherD">
              <b>Days: </b>
              <i>
                {showObj.schedule.days.length != 0 ? (
                  showObj.schedule.days.map((e) => {
                    return <span>{e}</span>;
                  })
                ) : (
                  <span>Unavailable</span>
                )}
              </i>
            </div>
            <div className="otherD">
              <b>Time: </b>
              <i>
                {showObj.schedule.time !== ""
                  ? showObj.schedule.time
                  : "Unavailable"}
              </i>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "700px",
              margin: "auto",
            }}
          >
            <div className="otherD">
              <b>Network: </b>
              <i>{showObj.network.name}</i>
            </div>
            <div className="otherD">
              <b>Country: </b>
              <i>{showObj.network.country.name}</i>
            </div>
          </div>
          <div className="inputSpace">
            <button onClick={downScroll} className="bookButtonD">
              Book Seat
            </button>
          </div>
        </div>
        <div className="lowerDiv" id="lowerDiv">
          <form className="formCont">
            <div>
              <div className="inputFields">Name</div>
              <div className="inputSpace">
                <input type="text"></input>
              </div>
            </div>
            <div>
              <div className="inputFields">Seats</div>
              <div className="inputSpace">
                <input type="number"></input>
              </div>
            </div>
            <div>
              <div className="inputFields">City</div>
              <div className="inputSpace">
                <input type="text"></input>
              </div>
            </div>
            <div>
              <div className="inputFields">State</div>
              <div className="inputSpace">
                <input type="text"></input>
              </div>
            </div>
            <div>
              <div className="inputFields">Mobile</div>
              <div className="inputSpace">
                <input type="text"></input>
              </div>
            </div>
            <div className="inputSpace">
              <button className="bookButtonD">Book</button>
            </div>
          </form>
          <div className="rightSide">
            <div>
              <b>Days: </b>
              {showObj.schedule.days.length != 0 ? (
                showObj.schedule.days.map((e) => {
                  return <span>{e}</span>;
                })
              ) : (
                <span>Unavailable</span>
              )}
            </div>
            <div>
              <b>Time: </b>
              {showObj.schedule.time !== ""
                ? showObj.schedule.time
                : "Unavailable"}
            </div>
            <button onClick={upscroll} className="bookButtonD">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
