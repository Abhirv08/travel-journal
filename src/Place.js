import React from "react";


export default function Place(props) {
  return (
    <div className="info--box">
      <div className="container flexbox">
        <img className="image" src={props.image} />
        <div className="about">
          <div className="location-box flexbox">
            <img src="images/path.png" />
            <div> {props.location} </div>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1> {props.title} </h1>
          <div className="date-of-travel flexbox">
            <div>{props.startDate}</div>
            <div> - </div>
            <div>{props.endDate}</div>
          </div>
          <div className="desc"> {props.description} </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
