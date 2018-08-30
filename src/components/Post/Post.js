import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import {withRouter} from 'react-router-dom'; // hoc, adds routing properties(history,match,location) to any component wrapped

import './Post.css';

class post extends Component { 
    
    render() {
        
        // let list = this.props.agents.map.call(this.props.agentsIds, function (listValue, i) {
        // return <li><Link to="/t">{listValue}{i}</Link></li>;
        //     })
        let list = [];
        for(let i=0;i<this.props.agents.length;i++) {
            list.push(<li><Link to="/hola">{this.props.agents[i]}{this.props.agentsIds[i]}</Link></li>);
        }
            
    

    return (
   
    <div className="Post">
    <div className="Opp" onClick={this.props.clicked}>
        <div className="row" id="rowFirst">
            <div className="col-xs-3"><p>{this.props.name}</p></div>
            <div className="col-xs-6"><p>{this.props.date}</p></div>
            <div className="col-xs-3"><p className="text-right"><b>{this.props.value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "t").replace('.', ',').replace('t','.')}€</b></p></div>    
        </div>
       
        <div className="row" id="rowSecond"> 
            <div className="col-xs-3"><p>{this.props.state}</p></div>
            <div className="col-xs-6"><p></p></div>
            <div className="col-xs-3">
                <p className="text-right">{this.props.probability}%</p>
            </div>   
        </div>

        <div className="row" id="rowThird"> 
            <div className="col-xs-3"><p style={{paddingLeft: "15px", color:"grey"}}>Agentes</p></div>
            <div className="col-xs-6"><ul>{list}</ul></div>
            <div className="col-xs-3"><p className="text-right">{this.props.result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "t").replace('.', ',').replace('t','.')}€</p></div>   
        </div>
    </div>
</div>
    );
}
}

//export default withRouter(post);
export default post;
