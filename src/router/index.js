import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/layout'

Vue.use(Router)

//重写路由push方法,解决重复点击菜单栏报错问题
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
                    // beforeEnter: ((to, from, next) => { // 路由独享守卫
                    //     next()
                    // }),
                    component: () =>
                        import ('@/pages/order/order.vue')
                },
                {
                    path: '/test1',
                    name: 'Test1',
                    component: () =>
                        import ('@/pages/test1/index.vue')
                },
                {
                    path: '/test2/:id',
                    name: 'Test2',
                    component: () =>
                        import ('@/pages/test2/index.vue')
                },
                {
                    path: '/test3',
                    name: 'Test3',
                    component: () =>
                        import ('@/pages/test3/index.vue')
                }
            ]
        }

    ]
})

//全局前置守卫
// router.beforeEach((to, from, next) => {
//     next()
// })

export default router