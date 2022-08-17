//!엑시오스 인스턴스
//todo .env추가 예정
import axios from "axios";
import { getCookie } from "../api/cookie";

const api = axios.create({
  baseURL: "http://54.180.95.84/api",
  headers: { authorization: `Bearer ${getCookie("is_login")}` },
});
export default api;
