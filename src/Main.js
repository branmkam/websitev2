import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';


//router thru main

import Homepage from './Homepage';
import AboutMod from './AboutMod';
import ProjectsMod from './ProjectsMod';
import ContactMod from './ContactMod';
 
export default function Main() {
    return (      
        <Switch>
            <Route path="/" component={Homepage}/>
            <Route path="/about" component={AboutMod}/>
            <Route path="/projects" component={ProjectsMod}/>
            <Route path="/contact" component= {ContactMod} />
            <Route component="/" />
        </Switch>
    );
}

//material ui