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
                    <img src={require("../assets/Logo.png") } height="30" width="20"/>
                        Bossbus Web App</CardTitle>
                    <CardText>  React, Redux, Firebase </CardText>
                    <CardActions border>
                    <a href="ttps://github.com/Teepath/screemApp" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://app.bossbusworld.com/" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
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
                             <img src={require("../assets/Logo.png") } height="20" width="20"/>
                            Bossbus Dashboard</CardTitle>
                    <CardText> React, Redux and Firebase</CardText>
                    <CardActions border>

                    <a href="https://github.com/Teepath/BookStoreApp" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://dashboard.bossbusworld.com/login" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                        
                       
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
                                 <img src={require("../assets/superbi.png") } height="20" width="20"/>SuperBi Dashboard</CardTitle>
                    <CardText>  React, Redux </CardText>
                    <CardActions border>
                    <a href="" target="_blank" rel="noopener noreferrer nofollow"><Button colored>Github</Button></a>
                        <a href="https://superbi.web.app/login" target="_blank" rel="noopener noreferrer nofollow"><Button colored> Live Demo</Button></a>
                     
                       
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
