//封装axios
import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com/',  
    baseURL: 'https://api.thecatapi.com/v1/', //获取一张随机猫图片
    timeout: 60000, //超时
});

// 添加请求拦截器
instance.interceptors.request.use(
    // 在发送请求之前做些什么
    config => {
        // 部分接口需要拿到token
        // config.headers.Authorization = '8h20oa9i8ezonttfplrzhwggv7o0hyxv'

        return config
    },

    error => {
        return Promise.reject(error)
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        const res = response.data
            //看接口返回再做打算--找的测试的里面没有code 或者 success
        if (response.status === 200) {
            return res
        }
        return Promise.reject(res.data)

    },
    error => {
        return Promise.reject(error)
    }
);

export default instance