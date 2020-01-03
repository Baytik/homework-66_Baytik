import React, {Fragment} from 'react';
import './Layout.css';
import {NavLink} from "react-router-dom";

const Layout = () => {
    return (
        <Fragment>
            <div className="container">
            <header>
                <div className="logo">
                    <h2>Static Pages</h2>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/pages/home">Home</NavLink>|</li>
                        <li><NavLink to="/pages/about">About</NavLink>|</li>
                        <li><NavLink to="/pages/contacts">Contacts</NavLink>|</li>
                        <li><NavLink to="/pages/division">Division</NavLink>|</li>
                        <li><NavLink to="/pages/admin">Admin</NavLink></li>
                    </ul>
                </nav>
            </header>
            </div>
        </Fragment>
    );
};

export default Layout;