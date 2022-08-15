//!엑시오스 인스턴스
//todo .env추가 예정
import axios from "axios";

const request = axios.create({
  baseURL: "",
});
let token;
export default request;
