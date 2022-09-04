import Vue from 'vue';
import VueRouter from 'vue-router';
import mainHome from '../page/main/mainHome'
import signIn from '../page/auth/signIn'
import signUp from '../page/auth/signUp'
import allBoard from '../page/board/allBoard'
import oneBoard from '../page/board/oneBoard'

Vue.use(VueRouter);

const router=new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        redirect:'/main'
    },{
        path:'/main',
        component:mainHome,
    },{
        path:'/signIn',
        component: signIn,
    },{
        path:'/signUp',
        component: signUp,
    },{
        path:'/board',
        component: allBoard,
    },{
        path:'/board/:boardIdx',
        component: oneBoard,
        name: 'Board'
    }
]
})

export default router;