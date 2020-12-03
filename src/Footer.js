import React from 'react';
import './App.css';
import react from './logo.svg';

function Footer() {

    //last updated
    var modiDate = new Date(document.lastModified);
    var x = modiDate.getMonth() + 1 + "/" + (modiDate.getDate()) + "/" + modiDate.getFullYear();

    //num days
    var startDate = new Date(2019, 8, 17);
    var y = Math.floor((new Date() - startDate) / (1000*60*60*24));

  return (     
    <div class = "footer">
        <p id = "lastupdate">Last Updated: {x} | designed and coded by Brandon Kaminski | This site is {y} days old!</p>
        <p class = "reactP"><a target = "_blank" class = "react" href = "https://reactjs.org/"><img height = "16" class = "App-logo" src = {react}></img> React.js</a> powered since 10/28/2020
        </p>
    </div>
  );
}

export default Footer;