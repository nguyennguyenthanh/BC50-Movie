import React, { useState } from 'react'
import { actAddUser } from './duck/actions';
import { useDispatch } from "react-redux";

export default function AddUser() {
  const dispatch = useDispatch();
  
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  }
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(event);
    dispatch(actAddUser(state));
  }

  return (
    <div className='container'>
      <h3>Add User</h3>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <label>Tài Khoản</label>
              <input name='taiKhoan' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <input name='matKhau' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name='email' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>SDT</label>
              <input name='soDt' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Mã nhóm</label>
              <input name='maNhom' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Mã Loại Người Dùng</label>
              <select className="form-control" name="maLoaiNguoiDung" onChange={handleOnchange}>
                <option value="KhachHang">Khách Hàng</option>
                <option value="QuanTri">Quản trị</option>
              </select>
            </div>
            <div className="form-group">
              <label>Họ Tên</label>
              <input name='hoTen' type="text" className="form-control" onChange={handleOnchange} />
            </div>
            <button className='btn btn-success'>Add User</button>
          </form>
        </div>
      </div>
    </div>
  )
}

