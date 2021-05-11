import React from "react";
import img1 from "./images/d2CLmo.jpg";
import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
const Card1= props => {
    return( 
        <div className='Card text-center'>
            <div className='overflow'>
                </div>
       <div className="Card-body text-dark">
       <img src={img1} alt='cricket' width="300" height="300"/>
           <h4 className="Card-title">Card Title </h4>
           <p className="App-text text-secondary">
           Some Senior Indian Guys Don't Like Being Restricted" But We Felt Safe In IPL Bubble: Mumbai Indians' Fielding Coach
           </p>
           <Button color="blue">Check Out</Button>{' '}
           </div> 
           </div>
    );
};
export default Card1; 