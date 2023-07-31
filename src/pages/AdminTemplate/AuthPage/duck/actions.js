import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL, AUTH_CLEAR_DATA } from "./constants";
// import api from "./../../../../utils/apiUtil";
import api from "utils/apiUtil";

//Giả sử BE trả time exp, 1 tiếng sau sẽ tự logout
// const TIME_EXP = 60 * 60 * 1000;
const TIME_EXP = 60 * 60 * 1000;
export const actAuth = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    api.post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          const user = result.data.content;
          if (!(user.maLoaiNguoiDung === "QuanTri")) {
            //show error, khi reject thì nó tự động hiểu và chạy vào catch
            const error = {
              response: {
                data: {
                  content: "Bạn không có quyền truy cập",
                },
              },
            };
            return Promise.reject(error);
          }
          //trước khi lưu mốc thời gian, thì tính tg hết hạn (tương lai = tim now + exp)
          const date = new Date().getTime();
          const exp = date + TIME_EXP;
          localStorage.setItem("exp", exp);
          //dispatch tới action timeoutLogout
          dispatch(actTimeoutLogout(navigate, TIME_EXP));
          //setLocalStorage mốc thời gian
          // localStorage.setItem("exp", exp);

          //QuanTri => Lưu thông tin user
          dispatch(actAuthSuccess(user));

          //QuanTri => lưu trạng thái login
          localStorage.setItem("UserAdmin", JSON.stringify(user));

          // QuanTri => redirect admin/dashboard
          navigate("/admin/dashboard", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(actAuthFail(error));
      })
  }
}

//logout
export const actLogout = (navigate) => {
  //remove Localstorage dùng phương thức removeItem
  localStorage.removeItem("UserAdmin");
  //redirect về trang auth
  navigate("/auth", { replace: true });
  //clear auth reducer
  return {
    type: AUTH_CLEAR_DATA,
  }
}

const actTimeoutLogout = (navigate, exp) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actLogout(navigate));
    }, exp);
  }
}

export const actTryLogin = (navigate) => {
  return (dispatch) => {
    const user = localStorage.getItem("UserAdmin");
    if (!user) return;

    const exp = localStorage.getItem("exp");
    const date = new Date().getTime();

    console.log(exp);
    console.log(date);
    if (date > exp) {
      dispatch(actLogout(navigate))
      return;
    }
    console.log("date < exp");
    //set timeout
    dispatch(actTimeoutLogout(navigate, exp - date));
    dispatch(actAuthSuccess(user));
  };
}

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  }
}

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data
  }
}

const actAuthFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error
  }
}