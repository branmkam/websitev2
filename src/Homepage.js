import './App.css';
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

import java from './images/javaimg.png';
import htmlcss from './images/htmlcssimg.png';
import python from './images/pythonimg.png';
import c from './images/cimg.png';
import ruby from './images/rubyimg.png';
import js from './images/jsimg.png';
import github from './images/githubimg.png';
import react from './logo.svg';


function Homepage() {

  const languages = [java, htmlcss, python, c, ruby, js, github, react];
  const langs = languages.map((lang) => <li class = "inl"><img class = "pl" src={lang}></img></li>);

  return (
    <div>
      <div id = "mainhome" class = "main">
          <h1 id = "welcome">Welcome!</h1>
        <p id = "start">Sophomore at UNC-Chapel Hill.<br/>Programmer.<br/>Language Enthusiast.<br/>
          Pianist.<br/>Writer.<br/>And More!</p>
      </div>
    </div>
  );
}

export default Homepage;
