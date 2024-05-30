import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="project-grid">
                    <Grid>
                    <Card shadow={5} style={{ minWidth: '450', margin: '0 auto' }} >
                     
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                                ''
                        }}>
                    <img src={require("../assets/Logo.svg") } height="30" width="20"/>
                        Blogpia App</CardTitle>
                    <CardText>  React Nextjs </CardText>
                    <CardActions border>
                    <a href="https://github.com/Teepath/Blogpia.git" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://blogpia-teepaths-projects.vercel.app/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                                'url()'
                        }}>
                             <img src={require("../assets/favicon.png") } height="20" width="20"/>
                            Rising Social App</CardTitle>
                    <CardText> React, Redux, Mongo and Nodejs</CardText>
                    <CardActions border>

                    <a href="#" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://risin.org/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                        
                       
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                    'url()'}}>Price 'n' Pay</CardTitle>
                    <CardText>  React, Redux, Firebase </CardText>
                    <CardActions border>
                    <a href="" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="#" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                     
                       
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                    
                    </Grid>
                    <Grid>
                    <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                                    'url()'
                            }}>
                                 <img src={require("../assets/superbi.png") } height="20" width="20"/>SuperBi Real Estate</CardTitle>
                    <CardText>  React, Redux. Nodejs and Mongodb </CardText>
                    <CardActions border>
                    <a href="#" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://real-estate-knmh.vercel.app/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                     
                       
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                                    'url()'
                            }}>
                                 <img src={require("../assets/read.png") } height="20" width="20"/>Read Book Project</CardTitle>
                    <CardText>  React, Redux </CardText>
                    <CardActions border>
                    <a href="https://github.com/Teepath/MyReadBook" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://readbook-e3fcb.web.app/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                     
                       
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                        </Card>
                        
                        <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                                    'url()'
                            }}>
                                 <img src={require("../assets/property.jpeg") } height="20" width="20"/>Property Bank</CardTitle>
                    <CardText>  React, Redux </CardText>
                    <CardActions border>
                    <a href="#" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://propertybankng-34bcf.web.app/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                     
                       
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                    </Grid>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div style={{ display: "flex", flexDirection:"column" }}>
                    <Grid>
                    <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                    'url() center/cover'}}> NameGenerator</CardTitle>
                    <CardText> Here are some of my front-end projects with Vanila Javascript </CardText>
                    <CardActions border>
                        <a href="https://tender-brown-50613c.netlify.com/" target="_blank" rel="oopener noreferrer nofollow"></a><Button colored component={Link} to="">Github</Button>
                        
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                    'url() center/cover'}}>Insurance App</CardTitle>
                    <CardText> Vanila Javascript</CardText>
                    <CardActions border>
                    <a href="https://github.com/Teepath/InsuranceApp" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://stupefied-jepsen-5ffbb2.netlify.com/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                 
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                    'url()'}}>Timer</CardTitle>
                    <CardText>  Vanila Javascript </CardText>
                    <CardActions border>
                        <a href="https://github.com/Teepath/git_profile" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://my-git-profile.firebaseapp.com/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                       
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                        </Card>
                    </Grid>
                    <Grid>
                    <Card shadow={5} style={{minWidth:'450', margin:'0 auto'}} >
                    <CardTitle style={{color:'black', height:'176px', 
                    background:
                    'url() center/cover'}}>Git_Profile</CardTitle>
                    <CardText>  Pure Vanila Javascript</CardText>
                    <CardActions border>
                    <a href="https://github.com/Teepath/InsuranceApp" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://stupefied-jepsen-5ffbb2.netlify.com/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                 
                    </CardActions>
                    <CardMenu styele={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                    </Grid>
                </div>
                
            )
        }else if(this.state.activeTab === 2){
            return(
                <div> 
                    <h1> Angular</h1>
                </div>

            )
        }else if(this.state.activeTab === 3){
            return(
                <div>
                    <h1> MongoDB</h1>
                    </div>
            )
        }
    }
    render(){
        return(
            <div className="activeTab">
            <Tabs activeTabs = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple> 
            <Tab> React </Tab>
            <Tab> Javascript </Tab>
            <Tab> Angular</Tab>
            <Tab> MongoDB</Tab>
            </Tabs>

                    <Grid className="project-grid"> 
                        <Cell col={12}>
                            <div>
                            {this.toggleCategories()}
                            </div>
                        </Cell> 
                    </Grid>
                    
    
            </div>
        )

    }
    
}


export default Project;
