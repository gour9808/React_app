import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navBar.css'


export const NavBar = () => {
    return (
        <div className="header">
            <div className="header-right">
                <Link className="active" to="/posts">Posts</Link>
                <Link to="/users">Catalog</Link>
                <Link to="/nested">Nested</Link>
                <hr />

            </div>
        </div>
    )
}