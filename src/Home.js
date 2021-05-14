import React,{useState,useRef} from "react";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {

    const [state,dispatch] = useStateValue();

    //Timer State Keep Track of Our Time
    const [timer, setTimer] = useState(0)
    //isActive State to check Whether The Timer is Running
     const [isActive, setIsActive] = useState(false)
    //isPaused State to Check Whether the State is Paused
    const [isPaused, setIsPaused] = useState(false)
    //Creating The countRef Variable from useRef() hook 
    const countRef = useRef(null)
    
  
  //As soon As the timer will start the isActive State Will be set to TRUE
  //isPaused state is set to FALSE
  const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
        //setting the reference for the countRef Variable it is as same as
        // countRef = document.getElementbyId("")
        countRef.current = setInterval(() => {
          //incrementing the timer by 1 at every 10 miliseconds as our precision will be of 2
          setTimer((timer) => timer + 1)
        }, 10)
        //we will dispatch an action call ADD_TIME ans sending the object
        //we are sending the time and the Status
        dispatch({
        type: actionTypes.ADD_TIME,
          list: {time:formatTime(),status:"STARTED"}
        })
    }
  
  const handlePause = () => {
      //as soon as this function calls we want our timer to stop so for that we use a method call clearInterval()
      clearInterval(countRef.current)
    //isPaused state is set to TRUE
      setIsPaused(true)
      //then again we will dispatch the same method but with different Status
      dispatch({
        type: actionTypes.ADD_TIME,
          list: {time:formatTime(),status:"PAUSED"}
        })
    }
  
  const handleResume = () => {
    //isPaused state is set to TRUE
      
    setIsPaused(false)
    //we again want our timer to start 
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 10)
      //then again we will dispatch the same method but with different Status
    
        dispatch({
          type: actionTypes.ADD_TIME,
            list: {time:formatTime(),status:"RESUMED"}
          })
    }
  
  const handleReset = () => {
      //stop the timer
      clearInterval(countRef.current)
      //set isActive to FALSE    
      setIsActive(false)
          //set isPaused to FALSE
      setIsPaused(false)
          //setting the  timer to 0
      setTimer(0);
        //then again we will dispatch the same method but with different Status
      
        dispatch({
          type: actionTypes.ADD_TIME,
            list: {time:formatTime(),status:"RESETED"}
          })
    }
    //this method will return the time formated in String
  const formatTime = () => {
      //THIS IS SOME SIMPLE MATHEMATICS TO CALCULATE SECONDS , MINUTES, HOURS FROM MILISECOND
      const miliseconds = `0${Math.floor(timer % 100)}`.slice(-2)
      const seconds = `${Math.floor(timer / 100)}`
      const getSeconds = `0${(seconds % 60)}`.slice(-2)
      const minutes = `${Math.floor(seconds / 60)}`
      const getMinutes = `0${minutes % 60}`.slice(-2)
      const getHours = `0${Math.floor(minutes / 3600)}`.slice(-2)
      
  
      return `${getHours} : ${getMinutes} : ${getSeconds}:${miliseconds}`
  }
  
  
    
    return (
      <div className="home">
            <div className="header">
                  <h1>React Stopwatch </h1>
            </div>
            <div className="clock">
                  <h1>{formatTime(timer)}</h1>
            </div>
            <div className='buttons'>
          <div className={isPaused ? "left_paused" : "left_button"}>
                        {/* if the state is paused then i want to display the resume button else show the paused
                        if the isActive and isPaused is false then show the Start button */}
                              {
                                !isActive && !isPaused ?
                                  <button onClick={handleStart}>Start</button>
                                  : (
                                    !isPaused ? <button onClick={handlePause}>Pause</button> :
                                      <button onClick={handleResume}>Resume</button>
                                  )
                              }
                    </div>
            <div className="right_button">
            {/* when the timer is started then only i want the button to function
            so disabled is used which use true and false as its value */}
                             <button onClick={handleReset} disabled={!isActive}>Reset</button>
                    </div>
             </div>
            <div className="history__button">
            {/* when the View History button is called i want to show the <History/> 
            component which is at "/history" */}
              <button ><Link to="/history">View History</Link></button>
            </div>
      </div>
    );
  }
  
export default Home;
