import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';


//router thru navbar

import Homepage from './Homepage';
import AboutMod from './AboutMod';
import ProjectsMod from './ProjectsMod';
import ContactMod from './ContactMod';
// import Error from './error'

 
class NavBar extends Component {
  render() {
    return (      
       <div>
            <ul id = "navbar">
            <li class = "navlist"><NavLink to="/">Home</NavLink></li>
            <li class = "navlist"><NavLink to="/about">About Me</NavLink></li>
            <li class = "navlist"><NavLink to="/projects">My Projects</NavLink></li>
            <li class = "navlist"><NavLink to="/contact">Contact Me!</NavLink></li>
            </ul>
            <Switch>
                <Route path="/" component={Homepage}/>
                <Route path="/about" component={AboutMod}/>
                <Route path="/projects" component={ProjectsMod}/>
                <Route path="/contact" component= {ContactMod} />
                <Route component="/" />
            </Switch>
        </div> 
    );
  }
}

export default NavBar;