import {NavLink} from 'react-router-dom';




function Nav(props){
    return (
    <nav className="nav">
      <ul>
        <li><h2><NavLink to="members" className={({ isActive }) => isActive ? 'active' : ''}>Members</NavLink></h2></li>
        <li><h2><NavLink to="search" className={({ isActive }) => isActive ? 'active' : ''}>Search</NavLink></h2></li>
      </ul>
    </nav>
    );
}

export default Nav;
