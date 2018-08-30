import React, { Component } from 'react';
import axios from '../../../axios'; 
import Post from '../../../components/Post/Post';
import './Posts.css'
class Posts extends Component {
    state = {
        opps: [],
        oppselectedId: null,
        error: false
    }

    componentDidMount () {
        console.log("One:" + this.props)
        axios.get('/opportunities') // error handling if URL is wrong
        .then(response => {
            const updatedOpps = response.data
            this.setState({opps: updatedOpps})
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            this.setState({error: true});
        });
    }

    render() {
    let oppsMapped;
    if(!this.state.opps) {
        console.log('loading')   
    }
    else{
        let opportunities = this.state.opps
        let tempData = null;
        console.log("Opps",opportunities)
         oppsMapped = opportunities.map((opportunity,key) =>
          {
             if (tempData === null) 
             {
                 tempData = opportunities[key]
             }
             else
             {
                 if(tempData.id !== opportunities[key].id) 
                 {
                     return <Post
                     id={tempData.id}
                     key={key}
                     name={tempData.name}
                     state= {tempData.state}
                     date={tempData.date}
                     agent={tempData.agent}
                     value={parseFloat(tempData.value)}
                     probability={tempData.probability}
                     result= {tempData.probability* tempData.value / 100}  
                     clicked={()=> this.opportunitySelected(tempData.id)} />
                 } 
                 else 
                 {
                     // add to array
                 }
             }
             tempData = opportunities[key]
        });
    }
    return (
        <div className="opps">
            {oppsMapped}
        </div>
    ); 
       
    }
}

export default Posts;






// let opps = <p style={{textAlign: 'center'}}>Something went wrong</p>
// console.log("Two rendered")
// // no error
// if(!this.state.error) {
//     console.log("test")
//    opps = this.state.opps.map(post => {
//     return <Post
//     id={post.id}
//     key={post.id}
//     name={post.name}
//     state= {post.state}
//     date={post.date}
//     agent={post.agent}
//     value={parseFloat(post.value)}
//     probability={post.probability}
//     result= {post.probability* post.value / 100}  
//     clicked={()=> this.opportunitySelected(post.id)} />
//     });
// }

// return (
//     <section className="opps">
//         {opps}
//     </section>
// );