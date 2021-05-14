import React from 'react';
//importing the useStatevalue will is having our context store
import { useStateValue } from "./StateProvider";
//importing the css file
import "./History.css"
import { Link, useHistory } from 'react-router-dom';

const History = () => {
    //Getting the list from the react Context
    const [{ list }] = useStateValue();
    // using the useHistory Hook and initialize the variable
    const history = useHistory();
    
    return (
        <div className="main">
            <div onClick={() => (history.push("/"))} className="back__button">
                    {/* simply created a button which on click will navigate back to our home page */}
                    <button>BACK</button>
            </div>
            <div className="history">
                {/* from the list mapping to all the list items and getting the time value and status from it  */}
            {list.map((item, index) => (
                <div key={index} className="single_item">
                    <h1>TIME : {item.time} </h1>
                    <h1>STATUS : { item.status}</h1>
                </div>
            ))}
            </div>
        </div>
    )
}
export default History;