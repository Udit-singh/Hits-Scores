import React,{Component}from 'react'
import Card from './CardUI';

class Cards extends Component{
    render()
    {
        return(
            <div className="conatiner-fluid d-flex justify-content-center">
<div className="row">
    <div className="col-md-4">
<Card/>
    </div>
    <div className="col-md-4">
        <Card/>
    </div>
    <div className="col-md-4">
        <Card/>
    </div>
</div>
            </div>
        );
    }
}
export default Cards;
