import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class AboutMe extends Component {
    render(){
        return(
            <div className="aboutme">
                <Grid>
                    <Cell col={12}>
                    <h1> About</h1>
                <p>A software engineer with problem-solving skills and talented for developing innovative solutions to Unusual and 
difficult problems. Experienced in JavaScript and object-oriented programming. Fast to learn and able to master 
new technologies with proven success working in both team and self-directed settings.</p>
                    </Cell>
                </Grid>
               
    
            </div>
        )

    }
    
}


export default AboutMe;
