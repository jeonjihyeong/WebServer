import Vue from 'vue';
import VueRouter from 'vue-router';
import mainHome from '../view/main/mainHome'
import signIn from '../view/auth/signIn'
import signUp from '../view/auth/signUp'
import allBoard from '../view/board/allBoard'
import oneBoard from '../view/board/oneBoard'
import myInfo from '@/view/auth/myInfo.vue'
import writeBoard from '@/view/board/writeBoard.vue'
import updateBoard from '@/view/board/updateBoard.vue'
import findId from "@/view/auth/findId"
import findPw from "@/view/auth/findPw"


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
    },{ path:'/update/:boardIdx',
        component: updateBoard,
        name: 'Update'
    },{
        path:'/user',
        component: myInfo,
    },{
        path:'/write',
        component: writeBoard,
    },{
        path:'/findId',
        component: findId,
    },{
        path:'/findPw',
        component: findPw,
    },

]
})

export default router;