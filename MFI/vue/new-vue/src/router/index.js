import Vue from 'vue';
import VueRouter from 'vue-router';
import signIn from '../page/auth/signIn'
import signUp from '../page/auth/signUp'
import mainHome from '../page/main/mainHome'

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
    }
]
})

export default router;