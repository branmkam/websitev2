import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div class = "header">
        <h1 id = "myname">Brandon Kaminski</h1>
        <h4 id = "subtext">Computer Scientist, Linguist, and Musician.</h4>
       <ul id = "navbar">
       <li class = "navlist"><Link class = "nlink" to="/">Home</Link></li>
       <li class = "navlist"><Link class = "nlink"  to="/about">About Me</Link></li>
       <li class = "navlist"><Link class = "nlink"  to="/projects">My Projects</Link></li>
       <li class = "navlist"><Link class = "nlink"  to="/contact">Contact Me!</Link></li>
       </ul>
   </div> 
  );
}

export default Header;
