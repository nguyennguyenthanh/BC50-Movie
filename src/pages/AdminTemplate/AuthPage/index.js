import React, { useState } from 'react';
import { actAuth } from './duck/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function AuthPage() {
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    //gọi tới api 
    dispatch(actAuth(state, navigate));
  }

  const renderError = () => {
    return <div className='alert alert-danger'>{error?.response.data.content}</div>;
  };

  if(localStorage.getItem("UserAdmin")){
    return <Navigate replace to="/admin/dashboard"/>;
  }
  
  return (
    <div className='container'>
      <h3>AuthPage</h3>
      {error && renderError()}
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Tài Khoản</label>
              <input name='taiKhoan' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <input name='matKhau' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <button className='btn btn-success'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
