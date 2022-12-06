import React from 'react'
import { useState, useEffect } from 'react'
import style from '../Style.css'
import axios from 'axios'
import useFetch from '../hooks/useFetch'
import "@fontsource/roboto"; 

const Location = ({ location }) => {

  return (

    <div>
      <article>
        <ul className="inf-hd" >
          <li className="one">
            <h3 className="two">Name</h3>
            <p className="three">{location?.name}</p>
          </li>

          <li className="one">
            <h3 className="two">Dimension</h3>
            <p className="three">{location?.dimension}</p>
          </li>
          <li className="one">
            <h3 className="two">Type</h3>
            <p className="three">{location?.type}</p>
          </li>
          <li className="one">
            <h3 className="two">Length</h3>
            <p className="three">{location?.residents.length}</p>
          </li>       
        </ul>
      </article>
    </div>
  )
}

export default Location




