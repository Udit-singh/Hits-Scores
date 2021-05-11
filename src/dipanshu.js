import React from "react";
import img1 from "./images/d2CLmo.jpg";

const Appp= props => {
    return( 
        <div className='Appp text-center'>
            <div className='overflow'>
                </div>
       <div className="Appp-body text-dark">
       <img src={img1} alt='cricket' width="300" height="300"/>
           <h4 className="Appp-title">Appp Title </h4>
           <p className="App-text text-secondary">
               dipanshu new project is going great but he is facing some of issues.
               i have full faith in him.
           </p>
           <a class="btn btn-primary" href="#" role="button">Link</a>
           </div> 
           </div>
    );
};
export default Appp; 