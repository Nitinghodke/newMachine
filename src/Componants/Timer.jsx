import React, { useState, useRef } from "react";

import "../App.css";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [lapTimer, setlapTimer] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [arr, setArr] = useState([]);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(false);
    clearInterval(increment.current);
  };

  const handleReset = () => {
    setlapTimer(
        lapTimer.map((ele)=>{
            
        })
    )
    localStorage.clear();
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;

  };

  const handleLap = () => {
    setArr([...arr, timer]);
    console.log(timer)
    let data=  arr.map((ele) => {
        const getSeconds = `0${ele % 60}`.slice(-2);
        const minutes = `${Math.floor(ele / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(ele / 3600)}`.slice(-2);
        return `${getHours} : ${getMinutes} : ${getSeconds}`;
      })

    console.log(lapTimer);
    lapTimer.push(data)
  };
   

  return (
    <div className="app">
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : (
            <button onClick={handlePause}>Pause</button>
          )}
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>

          <button onClick={handleLap}>lap</button>
        </div>
      </div>
      {lapTimer.map((ele, ind) => {
        return (
          <ul key={ind}>
            <li>{ele}</li>

          </ul>
        );
      })}
    </div>
  );
};

export default Timer;
