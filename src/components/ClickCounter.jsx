"use client"

import { useState } from "react"
import "./ClickCounter.css"

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    // Prevent counter from going below 0
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const getDisplayMessage = () => {
    if (count >= 10) {
      return "🎉 You've reached the limit!"
    }
    return null
  }

  return (
    <div className="counter-container">
      <div className="counter-display">
        <h2 className="counter-value">{count}</h2>
        {getDisplayMessage() && <p className="limit-message">{getDisplayMessage()}</p>}
      </div>

      <div className="button-container">
        <button className="counter-btn decrease-btn" onClick={handleDecrease} disabled={count === 0}>
          Decrease
        </button>
        <button className="counter-btn increase-btn" onClick={handleIncrease}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default ClickCounter
