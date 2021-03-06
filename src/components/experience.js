import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
   
    render(){
        return(
            <Grid>
                <Cell col={4}>
                {this.props.startYear} - {this.props.endYear}
                </Cell>
                <Cell col={8} >
                    <h4> {this.props.jobName}</h4>
                    <h6> {this.props.description}</h6>
                </Cell>
               
            </Grid>
        )
    }
}

export default Experience;