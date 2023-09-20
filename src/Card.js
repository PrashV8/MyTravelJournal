import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card-content">
        <img src={`./images/${props.coverImg}`} alt="images" className="card--images" />
        <div className="card--stats">
          <img src="./images/loci.png" alt="icon" className="iconi" />
          <span className="loca">{props.location}  </span>
          <span className="gmap">
            <a className="grey" href={props.googleMapsUrl}>View on Google Map</a>
          </span>
          <h1 className="title">{props.title}</h1>
          <span className="timing">
            <strong>{props.startDate}-{props.endDate}</strong>
          </span>
          <p className="Descript">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
