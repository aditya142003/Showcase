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
          <h2>{showObj.name}</h2>
          <div>{showObj.summary}</div>
          <div>
            Genre:
            {showObj.genres.map((e) => {
              return <span>{e}</span>;
            })}
          </div>
          <div>
            Type:
            {showObj.type}
          </div>
          <div>
            Premiered:
            {showObj.premiered}
          </div>
          <div>
            Runtime:
            {showObj.runtime} min
          </div>
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
          <div>
            Network:
            {showObj.network.name}
          </div>
          <button onClick={downScroll}>Book Seat</button>
        </div>
        <div className="lowerDiv" id="lowerDiv">
          <form>
            <div>Name</div>
            <input />
            <div>Seats</div>
            <input />
            <div>Mobile</div>
            <input />
            <div>Class</div>
            <input />
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
            <button onClick={upscroll}>Details</button>
          </div>
          <button>Book</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
