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
            let updatedOpps = [];
            let oppCount = 0;

            const oppsData = response.data;
            oppsData.forEach(oppData => {
                if (oppCount == 0 || updatedOpps[oppCount -1].id != oppData.id) {
                    let opp = {
                        id: oppData.id,
                        date: oppData.date,
                        agents: [ oppData.agent ],
                        agentsIds: [ oppData.agentId ],
                        value: oppData.value,
                        name: oppData.name,
                        state: oppData.state,
                        probability: oppData.probability
                    }
                    
                    updatedOpps.push (opp);
                    oppCount++;
                }
                else {
                    updatedOpps[oppCount - 1].agents.push(oppData.agent);
                    updatedOpps[oppCount - 1].agentsIds.push(oppData.agentId);
                }
            });


            
            this.setState({opps: updatedOpps})
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
            agents={post.agents}
            agentsIds={post.agentsIds}
            value={parseFloat(post.value)}
            probability={post.probability}
            result= {post.probability* post.value / 100}
            />
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
