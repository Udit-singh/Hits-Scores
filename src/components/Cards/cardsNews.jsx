import React,{Component}from 'react'
import Card1 from '../../cardUI';

class CardsNews extends Component{
    render()
    {
        return(
            <div className="conatiner-fluid d-flex justify-content-center">
<div className="row">
    <div className="col-md-4">
<Card1/>
    </div>
    <div className="col-md-4">
        <Card1/>
    </div>
    <div className="col-md-4">
        <Card1/>
    </div>
</div>
            </div>
        );
    }
}
export default CardsNews;
