import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from "react-router-dom"
import './App.css';

//Componets

import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{color:"white", fontFamily: "Anton"}} to="/"> MyPortfolio </Link>}  scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/project">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{color:"black", fontFamily: "Anton"}} to="/"> MyPortfolio </Link>}>
              <Navigation>
              <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/project">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
  </div>
  
  
  
    );
  }
}

export default App;
