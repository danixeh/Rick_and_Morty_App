import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import useCounter from '../hooks/useCounter'

const CountErp2 = () => {

    const { counter, increment, decrement, reset } = useCounter(1, 5, -10, 8)
    
    return (
    <div>
        <h1>counter App</h1>
        <h1>{counter}</h1>
        <button onClick={increment}></button>
        <button onClick={decrement}></button>
    </div>
  )
}

export default CountErp2