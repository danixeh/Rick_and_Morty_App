import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import style from '../Style.css'

const SecondSTree = ({country}) => {

  return (
    <article className="card">
      <img className='card_img' src={country.flags.svg} alt={country.name.common} />
      {/* <div>{country.name.common}</div> */}
      <h2 className='card_title' >{country.name.common}</h2>
          

    </article>
  )
}

export default SecondSTree