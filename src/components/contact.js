import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
          {/*  <h2> Tunde Adebanjo </h2> */}
            <img style={{width: "150", height: "350", margin:"auto", paddingTop: "8rem"}}  src="data:image/png;base64,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" alt="avatar"/>

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
