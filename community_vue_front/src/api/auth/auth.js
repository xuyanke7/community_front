import request from "@/utils/request";

export function userRegister(rigisterUserData) {
  return request({
    url: "/ums/user/register",
    method: "post",
    data: rigisterUserData,
  });
}


export function userLogin(loginUserData) {
  return request({
    url: "/ums/user/login",
    method: "post",
    data: loginUserData,
  });
}


