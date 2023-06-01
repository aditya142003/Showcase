import React from "react";
import "./Style/Detail.css";
import { useNavigate } from "react-router-dom";

function Details() {
  var showSel = localStorage.getItem("showSel");
  var showObj = JSON.parse(showSel);
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
          <div className="otherD">
            <button onClick={downScroll} className="bookButtonD">
              Book Seat
            </button>
          </div>
        </div>
        <div className="lowerDiv" id="lowerDiv">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" placeholder="name" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Mobile</label>
                <input type="text" class="form-control" placeholder="mobile" />
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Seats</label>
                <input type="number" class="form-control" />
              </div>
            </div>
          </form>
          <div>
            <div>
              Days:
              {showObj.schedule.days.length != 0 ? (
                showObj.schedule.days.map((e) => {
                  return <span>{e}</span>;
                })
              ) : (
                <span>Unavailable</span>
              )}
            </div>
            <div>
              Time:
              {showObj.schedule.time !== ""
                ? showObj.schedule.time
                : "Unavailable"}
            </div>
            <button onClick={upscroll} className="bookButtonD1">
              Details
            </button>
          </div>
          <button className="bookButtonD">Book</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
