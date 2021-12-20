import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'


class Resume extends Component {
    render(){
        return(
            <div>
               <Grid> 
                   <Cell col={4}>
                        <div className="col-left">
                  <img style={{ height: "200px", width:"250px", borderRadius: "50%" }} src={require("../assets/slack_profile_tunde.jpg")} alt="avatar" />
                          
                          <h2 style={{paddingTop: "2rem", fontFamily: 'Anton'}}> TUNDE ADEBANJO </h2>
                            <h4 style={{color: "grey"}}> Programmer </h4>
                            <hr style={{borderTop:" 5px solid #235671f", width: "50%", margin:"auto"}}/>
                            <p> " Life is scripted by the summation of choices will make " </p>
                            <h4>Email Address </h4>
                            <h5> tundeadebanjo246@gmail.com</h5>
                            <h4> Phone </h4>
                            <h5>(234)8023397367</h5>
          
                            <hr style={{borderTop:" 5px solid #235671f", width: "50%", margin:"auto"}}/>


                          </div>  
                    </Cell>
                    <Cell col={8} className="col-right-side">
                <h3>Education</h3>
                       <Education 
                        startYear= {2021}
                        endYear= {2021}
                        schoolName= "Udacity"
                        description="React NanoDegree Programme"
                        /> 
                        <Education 
                        startYear= {2010}
                        endYear= {2012}
                        schoolName= "University of West Indies, Cave Hill School of Business"
                        description="Associate Degree in Management"
                        /> 
                         <Education 
                        startYear= {2008}
                        endYear= {2009}
                        schoolName= "University of West Indies, Cave Hill School of Business"
                        description="Advannce Diploma in Information Technology"
                        /> 

                        <Education 
                        startYear= {2007}
                        endYear= {2008}
                        schoolName= "Samuel Jackman Prescod Polytechnic "
                        description="Office Technology "
                        /> 
                        <hr style={{borderTop: "2px solid red", margin: "auto", width:"70%"}} />

                <h3>Experience</h3>
                <Experience
                        startYear= {2019}
                        endYear= {"Current"}
                        jobName= "BossBus Technologies"
                        description="Web Developer"
                />
                
                <Experience
                        startYear= {2021}
                        endYear= {"Current"}
                        jobName= "GomyCode Nigeria"
                        description="Web Development Instructor"
                        /> 
                        <Experience
                        startYear= {2017}
                        endYear= {2018}
                        jobName= "GMYT Fashion Academy "
                        description="Web Designer and Content Manager "
                        /> 
                         <Experience
                        startYear= {2016}
                        endYear= {2017}
                        jobName= "CODE LAGOS "
                        description="Python and Scratch Instructor "
                        /> 

                    <Experience
                        startYear= {2015}
                        endYear= {2016}
                        jobName= "AQUILA ASSET MANAGEMENT LTD (ASM"
                        description="Relationship Manager"
                        /> 

                    
                 
                         <hr style={{borderTop: "2px solid red", margin: "auto", width:"70%"}} />
                         <h3> SKILLS </h3>
                         <Skills  
                         skill="Javascript"
                         progress={95}/>
                         <Skills  
                         skill="CSS/HTML"
                         progress={75}/>
                           <Skills  
                         skill="React"
                  progress={90} />
                 <Skills  
                         skill="React Native"
                         progress={90}/>
                           <Skills  
                         skill="Angular"
                         progress={45}/>
                           <Skills  
                         skill="Nodejs"
                         progress={80}/>
                           <Skills  
                         skill="MongoDB"
                         progress={90}/>
                           <Skills  
                         skill="Python"
                         progress={50}/>
                    </Cell>

                </Grid>
    
            </div>
        )

    }
    
}


export default Resume;

