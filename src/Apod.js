import React from "react";

function Apod(props) {

  const { dopa } = props;

  console.log('component', dopa);

  return (
    <div className="photo">
      <div className="photo-img">
        <img src={dopa.url} alt={`A visual of the day - ${dopa.date}`} />
      </div>
      <div className="photo-info">
        <h2>{dopa.title}</h2>
        <div>{dopa.date}</div>
        <p>{dopa.explanation}</p>
      </div>
    </div>
  )
}

export default Apod;