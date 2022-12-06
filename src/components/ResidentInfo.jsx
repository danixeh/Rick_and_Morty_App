import { useState, useEffect } from "react";
import style from "../Style.css";
import axios from "axios";
import React from "react";
import useFetch from "../hooks/useFetch";

const ResidentInfo = ({ url }) => {
  const resident = useFetch(url);

  console.log(resident);

  return (
    <div className="art-card">
      <div className="seven">
        <div className="five">
          <img className="img1" src={resident?.image} alt="" />
          <div className="cont_status">
            <div className="circle">1</div>
            <span>{resident?.status}</span>
          </div>
        </div>
      </div>
      {/* <div className='main'> */}
      <h3>{resident?.name}</h3>
      <li className="onee">
        <h3 className="twoo">Species:</h3>
        <p className="threee">{resident?.species}</p>
      </li>
      <li className="onee">
        <h3 className="twoo">Origin:</h3>
        <p className="threee">{resident?.origin.name}</p>
      </li>
      <li className="onee">
        <h3 className="twoo">found it in:</h3>
        <p className="threee">
          {resident?.episode.length} episode
          {resident?.episode.length > 1 ? "s" : ""}:
        </p>
      </li>

      {/* </div> */}
    </div>
  );
};

export default ResidentInfo;
