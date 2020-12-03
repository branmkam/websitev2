import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Homepage from './Homepage';
import AboutMod from './AboutMod';
import ProjectsMod from './ProjectsMod';
import ContactMod from './ContactMod';

// Root file, everything generated from here. Creates root div to display content in page const
  // var rootDiv = document.createElement('div'); 
  // rootDiv.id = 'root'; rootDiv.className = 'content'; 
  // document.body.appendChild(rootDiv);  

ReactDOM.render (   
    <BrowserRouter>    
      <Header />    
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={AboutMod}/>
            <Route exact path="/projects" component={ProjectsMod}/>
            <Route exact path="/contact" component= {ContactMod} />
            <Route component="/" />
        </Switch>
      <Footer />
    </BrowserRouter>
  , document.getElementById('root'));

