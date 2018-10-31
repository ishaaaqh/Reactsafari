import React from 'react';
import "./sidebar-menu.css";
const Sidebar = props => (
    <nav className="ham-menu">
        <ul>
            <li className="menu-items"><a href="/">Home</a></li>
            <li className="menu-item"><a href="/">Services</a></li>
            <li className="menu-item"><a href="/">Products</a></li>
            <li className="menu-item"><a href="/">Contact</a></li>
        </ul>
    </nav>
);
export default Sidebar;