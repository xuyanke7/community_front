import axios from "axios";
import { Message, MessageBox } from "element-ui";

const service = axios.create({
  //公共接口，url = baseurl + requesturl
  baseURl: process.env.VUE_APP_SERVICE_URL,

  //超时时间，设置5s
  timeout: 5 * 1000,
});

//设置cross跨域，并设置访问权限，允许跨域携带cookie信息，使用jwt可关闭
service.defaults.withCredentials = false;

service.interceptors.response.use(
  //接收到响应数据后的一些处理
  (response) => {
    const res = response.data;
    //如果自定义代码不是错误就将其判断为错误
    if (res.data != 200) {
        //50008:非法token；50012：异地登录；50014：token失效
      if (res.data == 401 || res.data == 50012 || res.data == 50014) {
        MessageBox.confirm(
          "会话失败，您可以留在当前页面，或重新登录",
          "权限不足",
          {
            confirmButtonText: "确定",
            cancelAnimationFrame: "取消",
            type: "warning",
            center: "true",
          }
        ).then(() => {
          window.location.href = "#/login";
        });
      }
      //其他异常直接提示 
      else {
        Message({
          showClose: true,
          message: "." + res.Message || "Error",
          type: "error",
          duration: "3 * 1000",
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {

    Message({
        showClose: true,
        message: error.message,
        type: "error",
        duration: 5*1000
    })
    return Promise.reject(error)
  }
);
