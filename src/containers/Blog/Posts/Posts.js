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
        axios.get('/opportunities') // error handling if URL is wrong
        .then(response => {
            const updatedOpps = response.data
            let tempData = null;
            let arrayOpps = [];
            oppsMapped = updatedOpps.map((opportunity,key) => {
            
                // check if tempData is empty   // why? 
                if (tempData === null) 
                {
                    tempData = updatedOpps[key]
                }
                else 
                {
                    //two adjacent elements does NOT have the same id
                    if(tempData.id !== updatedOpps[key].id) 
                    {    
                    arrayOpps[updatedOpps[key-1]].push ({
                        "id":tempData[key].id,
                    })
                    tempData = updatedOpps[i]
                    }
                    // have the same id 
                    else
                    {
                    return;
                    }
                }
               
            }),
            this.setState({opps: arrayOpps}),
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            this.setState({error: true})
        })
    
    }

    render() {
        let opps = <p style={{textAlign: 'center'}}>Something went wrong</p>
        // no error
        if(!this.state.error) {
        console.log("test")
        opps = this.state.opps.map(post => {
            return <Post
            id={post.id}
            key={post.id}
            name={post.name}
            state= {post.state}
            date={post.date}
            agent={post.agent}
            value={parseFloat(post.value)}
            probability={post.probability}
            result= {post.probability* post.value / 100}  
            clicked={()=> this.opportunitySelected(post.id)} />
            });
        }


        return (
            <section className="opps">
                {opps}
            </section>
        );
    
       
    }
}

export default Posts;




// let oppsMapped;
//     if(!this.state.opps) {
//         console.log('loading')   
//     }
//     else{
//         let opportunities = this.state.opps
//         let tempData = null;
//         console.log("Opps",opportunities)
//          oppsMapped = opportunities.map((opportunity,key) =>
//           {
//              if (tempData === null) 
//              {
//                  tempData = opportunities[key]
//              }
//              else
//              {
//                  if(tempData.id !== opportunities[key].id) 
//                  {
//                      return <Post
//                      id={tempData.id}
//                      key={key}
//                      name={tempData.name}
//                      state= {tempData.state}
//                      date={tempData.date}
//                      agent={tempData.agent}
//                      value={parseFloat(tempData.value)}
//                      probability={tempData.probability}
//                      result= {tempData.probability* tempData.value / 100}  
//                      clicked={()=> this.opportunitySelected(tempData.id)} />
//                  } 
//                  else 
//                  {
//                      // add to array
//                  }
//              }
//              tempData = opportunities[key]
//         });
//     }
//     return (
//         <div className="opps">
//             {oppsMapped}
//         </div>
//     ); 




    // for ( let i = 0; i < updatedOpps.length; i++) {
    //     if (updatedOpps[i].id !== updatedOpps[i+1].id){
    //         arrayOpps.push(updatedOpps[i])
    //     }
    //     else
    //     {
    //       tempData.push[updatedOpps[i], updatedOpps[i+1]]
    //       console.log("tempdata", tempData)  
    //     }
    // }