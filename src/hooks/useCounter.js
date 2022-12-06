import React, { useEffect, useState } from 'react'

const useCounter = (initialValue = 1, resetValue = 2, minValue= -Infinity, maxValue= Infinity) => {
    const [counter, setCounter] = useState(initialValue)
    const increment = () => setCounter(counter + 1 <= maxValue ? counter + 1 : counter)
    const decrement = () => setCounter(counter - 1 >= minValue ? counter - 1 : counter)
    const reset = () => setCounter(resetValue)
    
    return {counter, increment, decrement, reset}

}

export default useCounter