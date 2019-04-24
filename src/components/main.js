import React from 'react';

import { Switch, Route} from 'react-router-dom';
import LandinPage from './landingPage';
import Resume from './resume';
import Project from './project';
import Contact from './contact';
import AboutMe from './aboutme';




const Main = ()=>{
    return(
        <Switch>
           
            <Route   path ="/resume" component = {Resume}/>
            <Route   path ="/aboutme" component = {AboutMe}/>
            <Route   path ="/project" component = {Project}/>
            <Route   path ="/contact" component = {Contact}/>
            <Route exact path ="/" component = {LandinPage}/>
        </Switch>

    )
}

export default Main;