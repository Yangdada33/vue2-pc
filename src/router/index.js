import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/layout'

Vue.use(Router)

//解决重复点击菜单栏报错问题
//获取原型对象上的push函数
const originalPush = Router.prototype.push
    //修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const router = new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        }, {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('@/pages/login/index.vue')
        },
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [{
                    path: '/home',
                    name: 'Home',
                    component: () =>
                        import ('@/pages/home/home.vue')
                },
                {
                    path: '/workbench',
                    name: 'Workbench',
                    component: () =>
                        import ('@/pages/workbench/workbench.vue')
                },
                {
                    path: '/message',
                    name: 'Message',
                    component: () =>
                        import ('@/pages/message/message.vue')
                },
                {
                    path: '/order',
                    name: 'Order',
                    component: () =>
                        import ('@/pages/order/order.vue')
                }
            ]
        },

    ]
})


export default router