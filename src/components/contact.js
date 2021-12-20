import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
          {/*  <h2> Tunde Adebanjo </h2> */}
            <img style={{width: "150", height: "350", margin:"auto", paddingTop: "1rem"}}  src={require("../assets/slack_profile_tunde.jpg")} alt="avatar"/>

                <h3> I am your mega reliable guy!</h3> 
            </Cell>
            <Cell col={6}> 
                <div className="contact-grid">
                <h2 > Contact Me</h2>
                <hr/>
                <div className="contact-list"> 
                <List >
  <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: "Anton"}}>
        <i className="fa fa-phone-square" arial-hidden="true"/>
            (234)8023397467
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize: '20px', fontFamily: "Anton"}}>
        <i className="fa fa-fax" arial-hidden="true"/>
            (234)8023397467
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize: '20px', fontFamily: "Anton"}}>
        <i className="fa fa-envelope" arial-hidden="true"/>
            tundeadebanjo246@gmail.com
    </ListItemContent>
  </ListItem>
 
  <ListItem>
    <ListItemContent style={{fontSize: '20px', fontFamily: "Anton"}}>
        <i className="fa fa-skype" arial-hidden="true"/>
            SkypeId: tunde_kazeem
    </ListItemContent>
  </ListItem>

</List>
                </div>
             </div>

             </Cell>

            </Grid> 
                
            </div>
        )

    }
    
}


export default Contact;
