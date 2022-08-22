export default {
    namespaced: true, //解决不同模块命名冲突
    state: {
        message: ''
    },
    getters: {
        getMessage: state => state.message
    },
    mutations: {
        setmessage(state, value) {
            state.message = value
        }
    },
    actions: {}
}