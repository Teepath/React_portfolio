import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import '../index.css';


class LandinPage extends Component {
    render(){
        return(
            <div style={{width:"100%", margin:"auto"}}>
              <Grid className="landing-page"> 
                  <Cell col={12}>
                  <div> 
                  <img src={require("../assets/slack_profile_tunde.jpg")} 
                  className="img-avatar" alt="my-avatar"/>
                  <h2 style={{ fontSize: "30px", fontFamily:"Anton"}}> Tunde Adebanjo </h2>
                  </div>
                  <div className="banner-line"> 
                      <h1>Full Stack Developer</h1>
                      <hr/>
                      <p> HTML | CSS | Javascript | React | React Native | Firebase | Angular | Nodejs | Express | MongoDB </p>
                     <div className="social-link">
                        <a href="https://teepath.github.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" /> </a>      
                        <a href="http:google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube" aria-hidden="true" /> </a>      
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" /> </a>      
                        <a href="http//:google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp" aria-hidden="true" /> </a>     
                    </div>
                  </div>
                  </Cell>
            
                </Grid>
    
            </div>
        )

    }
    
}


export default LandinPage;
