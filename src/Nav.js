import './App.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (      
        <div>
            <ul id = "navbar">
            <li class = "navlist"><NavLink to="/">Home</NavLink></li>
            <li class = "navlist"><NavLink to="/about">About Me</NavLink></li>
            <li class = "navlist"><NavLink to="/projects">My Projects</NavLink></li>
            <li class = "navlist"><NavLink to="/contact">Contact Me!</NavLink></li>
            </ul>
        </div> 
    );
}

export default Nav;
