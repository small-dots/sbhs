/** 
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-25 16:26:25
 * @LastEditTime: 2022-04-25 16:30:29
 * @Description: axios处理请求
 */
import request from '@/utils/request'
// 封装自己的get/post方法
export default {
    get: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            request.get(path, {
                params: data
            })
                .then(function (response) {
                    resolve(response.data);
                    /* 返回response，组件根据response的状态进行判断提示 */
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },
    post: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            request.post(path, deleteNull(data))
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
};
function deleteNull(data) {
    for (const key in data) {
        if (data[key] === '') {
            delete data[key]
        }
    }
    return data
}
