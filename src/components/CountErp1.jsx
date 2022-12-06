import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import useCounter from '../hooks/useCounter'


const CountErp1 = () => {


const { counter, increment, decrement, reset } = useCounter(1,5,-10,8)


    return (
     
        <div>
            <h1>countErp1</h1>
            <div>{counter}</div>
            <button onClick={increment}></button>
            <button onClick={reset}></button>
            <button onClick={decrement}></button>
        </div>
  )
}

export default CountErp1