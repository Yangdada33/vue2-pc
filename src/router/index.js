import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/layout'

Vue.use(Router)


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
            }]
        },

    ]
})


export default router