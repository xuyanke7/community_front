import request from "@/utils/request";

export function getTodayTip() {
  return request({
    url: "/tips/show",
    method: "get",
  });
}
