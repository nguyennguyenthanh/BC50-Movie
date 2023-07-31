import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* Grey with black text */}
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="#">Navbar</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/list-movie">ListMovie</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/hooks">Hooks</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
