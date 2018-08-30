import React from 'react';
//import {withRouter} from 'react-router-dom'; // hoc, adds routing properties(history,match,location) to any component wrapped

import './Post.css';

const post = (props) => (
    <div className="Post">
    <div className="Opp" onClick={props.clicked}>
        <div className="row" id="rowFirst">
            <div className="col-xs-3"><p>{props.name}</p></div>
            <div className="col-xs-6"><p>{props.date}</p></div>
            <div className="col-xs-3"><p className="text-right"><b>{props.value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "t").replace('.', ',').replace('t','.')}€</b></p></div>    
        </div>
       
        <div className="row" id="rowSecond"> 
            <div className="col-xs-3"><p>{props.state}</p></div>
            <div className="col-xs-6"><p></p></div>
            <div className="col-xs-3">
                <p className="text-right">{props.probability}%</p>
            </div>   
        </div>

        <div className="row" id="rowThird"> 
            <div className="col-xs-3"><p style={{paddingLeft: "15px", color:"grey"}}>Agentes</p></div>
            <div className="col-xs-6"><p>{props.agent}</p></div>
            <div className="col-xs-3"><p className="text-right">{props.result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "t").replace('.', ',').replace('t','.')}€</p></div>   
        </div>
    </div>
</div>
);

//export default withRouter(post);
export default post;
