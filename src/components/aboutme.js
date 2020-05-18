import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class AboutMe extends Component {
    render(){
        return(
            <div className="aboutme">
                <Grid>
                    <Cell col={12}>
                    <h1> AboutMe</h1>
                <p>Motivated Software Engineer seeking employment as part of a dynamic software development team. Focused and detail-oriented, problem-solving and talented for developing innovative solutions to unusual and difficult problems. Experienced in object-oriented programming. Fast to learn and able to master new technologies with proven success working in both a team and self-directed setting. </p>
                    </Cell>
                </Grid>
               
    
            </div>
        )

    }
    
}


export default AboutMe;
