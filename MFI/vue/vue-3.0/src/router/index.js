import Vue from 'vue';
import VueRouter from 'vue-router';
import NavBar from '../components/NavBar/navBar'
import signIn from '../page/auth/signIn'
import signUp from '../page/auth/signUp'

Vue.use(VueRouter);

const router=new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        redirect:'/home'
    },{
        path:'home',
        component:NavBar
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