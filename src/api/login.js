/* 登录API */
import net from './net'
const base = '/shb_base_api'
const url = '/BasePlatform/api/user/'
/* 登录 */
export class signIn {
  static signIn = (params) => net.post(base + url + 'login', params);
}
/* 注册 */
export class signUp {
  static signUp = (params) => net.post(base + url + 'register', params);
}