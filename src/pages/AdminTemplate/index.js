import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from 'pages/AdminTemplate/_components/Navbar';
import { actTryLogin } from 'pages/AdminTemplate/AuthPage/duck/actions';
import { useDispatch } from 'react-redux';

export default function AdminTemplate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actTryLogin(navigate));
  }, []);

  // kiểm tra có login vào hệ thống chưa?
  if (!localStorage.getItem("UserAdmin")) {
    //redirect => auth
    return <Navigate to="/auth" replace />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

