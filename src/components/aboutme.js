import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class AboutMe extends Component {
    render(){
        return(
            <div className="aboutme">
                <Grid>
                    <Cell col={12}>
                    <h1> AboutMe</h1>
                <p> I considered myself to be self-motivated and enthusiastic for technical and administrative knowledge, vision-driven and excellent skills in interpersonal relationship, articulate, analytical and problem solving skills. I presently open to work onsite or remotely on any software projects expecially
                     those can challenge me to learn new skills that can help to deep my skills.</p>
                    </Cell>
                </Grid>
               
    
            </div>
        )

    }
    
}


export default AboutMe;
