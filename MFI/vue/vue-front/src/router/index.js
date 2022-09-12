import Vue from 'vue';
import VueRouter from 'vue-router';
import mainHome from '../page/main/mainHome'
import signIn from '../page/auth/signIn'
import signUp from '../page/auth/signUp'
import allBoard from '../page/board/allBoard'
import oneBoard from '../page/board/oneBoard'
import myInfo from '@/page/auth/myInfo.vue'
import writeBoard from '@/page/board/writeBoard.vue'
import updateBoard from '@/page/board/updateBoard.vue'
import findId from "@/page/auth/findId"
import findPw from "@/page/auth/findPw"


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