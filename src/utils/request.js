/*
 * @Desc: axios封装
 * @Author: 安忠琪
 * @LastEditTime: 2022-01-08 12:05:49
 */
import axios from 'axios'
import { Modal } from '@arco-design/web-vue';

const service = axios.create({
    timeout: 60000 // 请求超时时间
})
service.interceptors.request.use(
    config => {
        // if (store.getters.token) {
            config.headers['appId'] = 'sbh_ono'
            config.headers['Content-Type'] = 'application/json'
            config.headers['token'] = 'b4a2781ba1c0ebfbf80907d4689dab23ead8ed9d5a08c1db0cd348c616e129ab'
        // }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== '0000' && res.code !== '00000') {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 1000
            })

            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                Modal.warning({
                    title: '重新登录',
                    content: '您已注销，您可以取消以停留在此页面，或再次登, 确认注销'
                });
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
