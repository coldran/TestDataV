

const routes = [
    {
        path: '/',
        redirect: '/dataV'
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test.vue')
    },
    {
        path: '/dataV',
        name: 'dataV',
        component: () => import('@/views/dataV.vue')
    }
]

export default routes;