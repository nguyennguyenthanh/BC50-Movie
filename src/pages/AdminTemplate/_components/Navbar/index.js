import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { actLogout } from 'pages/AdminTemplate/AuthPage/duck/actions';
import { useDispatch } from 'react-redux';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {/* Grey with black text */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="#">Navbar</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/admin/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/admin/add-user">AddUser</NavLink>
          </li>
          <li className="nav-item ml-5">
            <button className='btn btn-info' onClick={()=>{
              dispatch(actLogout(navigate));
            }}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
